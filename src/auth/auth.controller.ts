import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
  @Post('tokem')
  async token (@Body() body: any) {
    const token = await this.authService.gerarTokenDeTeste();
    return { token };
  }

  
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}