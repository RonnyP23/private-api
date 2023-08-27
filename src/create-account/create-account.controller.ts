import { Controller, Post,Get, Put, Delete,Body, ValidationPipe, HttpException, HttpStatus, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm'
import { CreateAccountModel } from './create-account.model';
import { CreateAccountSchema } from 'src/schemas/create-account.schema';

@Controller('user-account')
export class CreateAccountController {

    constructor(@InjectRepository(CreateAccountModel) private repository:Repository<CreateAccountModel>) {

    }

    @Post()
    public async createAccount(@Body(ValidationPipe) body: CreateAccountSchema): Promise<{data: CreateAccountModel}>{
        try {
            const accountCreated = await this.repository.save(body);
            return { data: accountCreated };
          } catch (error) {
            throw new HttpException('Erro ao criar a conta.', HttpStatus.INTERNAL_SERVER_ERROR);
          }
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

