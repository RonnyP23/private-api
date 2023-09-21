import { Controller, Post,Get, Put, Delete,Body, ValidationPipe, HttpException, HttpStatus, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm'
import { CreateAccountModel } from './create-account.model';
import { CreateAccountSchema } from 'src/schemas/create-account.schema';
import * as bcrypt from 'bcrypt';

@Controller('user-account')
export class CreateAccountController {

    constructor(@InjectRepository(CreateAccountModel) private repository:Repository<CreateAccountModel>) {

    }

    @Post()
    public async createAccount(@Body(ValidationPipe) body: CreateAccountSchema): Promise<{data: CreateAccountModel}>{

        const saltRounds = 10;
        const passwordHash = bcrypt.hashSync(body.password,saltRounds)
        body.password = passwordHash;
        
        
        try {
            const accountCreated = await this.repository.save(body);
            return { data: accountCreated };
          } catch (error) {
            throw new HttpException('Erro ao criar a conta.', HttpStatus.INTERNAL_SERVER_ERROR);
          }
    }
 
    @Get() 
    public async getAll(): Promise<CreateAccountModel[]> {
        const account = await this.repository.find();
        
        return account
    }

    @Get(':id') 
    public async getOneAccount(@Param('id') id: number): Promise<{ data: CreateAccountModel}> {
        const account = await this.repository.findOne({ where: { id } });
        
        return {data: account}
       
    }

    @Put(':id') 
    public updateAccount(): any {
        return {data: 'atualizado'};
    }

    @Delete(':id') 
    public deleteAccount(): any {
        return {data: 'excluir'};
    }
}

