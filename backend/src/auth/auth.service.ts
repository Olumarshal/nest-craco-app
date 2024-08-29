import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PayloadType } from './types';

import { ConfigService } from '@nestjs/config';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(
    loginDTO: LoginDTO,
  ): Promise<{ accessToken: string } | { message: string }> {
    const user = await this.userService.findByEmail(loginDTO.email);
    const passwordMatched = await bcrypt.compare(
      loginDTO.password,
      user.password,
    );

    if (!passwordMatched) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: PayloadType = { email: user.email, Id: user.id };
    const expiresIn = this.configService.get<string>('jwt_ttl');

    const accessToken = this.jwtService.sign(payload, { expiresIn });
    return { accessToken };
  }
}
