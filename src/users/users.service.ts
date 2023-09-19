import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAccountModel } from 'src/create-account/create-account.model';
import { Repository } from 'typeorm';


// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()

export class UsersService {

  constructor(@InjectRepository(CreateAccountModel) private repository:Repository<CreateAccountModel>){}
  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'ronny',
  //     password: "$2a$10$HicsR3uBLOTxP0Jm/yJb0OKbzY8ZmV6d5y9qulIgK27Cthz.M6vIu",
  //   },
  //   {
  //     userId: 2,
  //     username: 'maria',
  //     password: 'guess',
  //   },
  // ];

  async findByUsermane(name: string): Promise<User | undefined> {
    return this.repository.findOne({ where: { name } });
  }
}
