import { Controller, Post,Get, Put, Delete,Body, ValidationPipe, HttpException, HttpStatus, Param, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm'
import { CreateAccountModel } from './create-account.model';
import { CreateAccountSchema } from 'src/schemas/create-account.schema';
import { UpdateAccountSchema } from 'src/schemas/update-account.schema';
import { CreateAccountService } from 'src/create-account/create-account.service'
import * as bcrypt from 'bcrypt';

import { from } from 'rxjs';

@Controller('user-account')
export class CreateAccountController {

    constructor(
        @InjectRepository(CreateAccountModel) private repository:Repository<CreateAccountModel>,
        private createAccountService: CreateAccountService ,
        ) {}

    @Post()
    public async createAccount(@Body(ValidationPipe) body: CreateAccountSchema): Promise<{data: CreateAccountModel}>{
        debugger

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

    @Patch(':id')
    public async updateAccount(@Param('id') id: number, @Body() body: UpdateAccountSchema): Promise<{}> {
        return  this.createAccountService.update(id, body)
}

    @Delete(':id') 
    public async deleteAccount(@Param('id') id: number): Promise<{ data: CreateAccountModel}> {
      
        const result = await this.repository.findOne({ where: { id }}); 
         await this.repository.remove(result)

        return {data: result}
        }
        
}

