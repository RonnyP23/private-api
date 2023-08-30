
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

  async gerarTokenDeTeste(): Promise<string> {
    const payload = { username: 'usuario_de_teste', sub: 'id_de_teste' };
    return this.jwtService.signAsync(payload);
  }

  async signIn(username, password) {
    const user = await this.usersService.findByUsermane(username);

    if (user.password === password) {
      const payload = { sub: user.userId, username: user.username };
      return {
      access_token: await this.jwtService.signAsync(payload),
    };
    }
    //const passwordMatches = await bcrypt.compare(password, user.password)

    // if(!passwordMatches) {
    //   throw new UnauthorizedException();
    // }
    
  }
}