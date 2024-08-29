import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
