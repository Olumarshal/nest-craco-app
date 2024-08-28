import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { JwtAuthGuard } from 'src/auth/jwt-guard';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('api/v1')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() userDTO: CreateUserDTO): Promise<User> {
    try {
      const user = await this.usersService.create(userDTO);
      return user;
    } catch (error) {
      throw new NotFoundException('Error occurred during signup');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('get-user/:id')
  async getUser(@Param('id') id: number): Promise<User> {
    try {
      return await this.usersService.findOneById(id);
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }
}
