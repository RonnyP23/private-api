import { Module } from '@nestjs/common';
import { CreateAccountController } from './create-account.controller';
import { CreateAccountService } from './create-account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateAccountModel } from './create-account.model';

@Module({
  imports: [TypeOrmModule.forFeature([CreateAccountModel])],
  controllers: [CreateAccountController],
  providers: [CreateAccountService]
})
export class CreateAccountModule {}
