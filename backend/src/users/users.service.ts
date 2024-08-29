import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(userDTO: CreateUserDTO): Promise<User> {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(userDTO.password, salt);

      const user = await this.userModel.create({
        firstName: userDTO.firstName,
        lastName: userDTO.lastName,
        email: userDTO.email,
        phone: userDTO.phone,
        password: hashedPassword,
      });

      user.password = undefined;
      console.log(user);
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async findOneById(id: number): Promise<User> {
    return this.userModel.findByPk(id, {
      attributes: { exclude: ['password'] }, // Exclude the password field
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ where: { email } });
  }
}
