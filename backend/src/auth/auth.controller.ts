import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnauthorizedException,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';

@Controller('api/v1')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDTO: LoginDTO) {
    try {
      return await this.authService.login(loginDTO);
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw new UnauthorizedException(error.message);
      }
      throw new BadRequestException('Invalid data');
    }
  }
}
