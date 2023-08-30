import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateAccountModel } from 'src/create-account/create-account.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CreateAccountModel])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
