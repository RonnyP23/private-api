import {IsString} from 'class-validator'


export class CreateAccountSchema {
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    telefone: string;

    @IsString()
    cpf: string;

    @IsString()
    password: string

}