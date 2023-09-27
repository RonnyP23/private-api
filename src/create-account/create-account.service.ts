import { Injectable } from '@nestjs/common';
import { UpdateAccountSchema } from 'src/schemas/update-account.schema';
import { Repository} from 'typeorm'
import { CreateAccountModel } from './create-account.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateAccountService {

    constructor(@InjectRepository(CreateAccountModel) private repository:Repository<CreateAccountModel>,) {

    }
    update (id: number, updateAccountSchema: UpdateAccountSchema) {
        debugger
        return this.repository.update(id,updateAccountSchema)
    }
}
