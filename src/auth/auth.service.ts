
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(username, password) {
    const user = await this.usersService.findByUsermane(username);

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }
    if(username === user.name) {

      const passwordMatches = await bcrypt.compare(password, user.password)
      
      if (passwordMatches) {
        const payload = { sub: user.userId, username: user.username };
        return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
    
  }


  }
}