import {IsNotEmpty, IsString} from 'class-validator';


export class CreateAccountSchema {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    
    @IsString()
    telefone: string;

    
    @IsString()
    cpf: string;

    @IsNotEmpty()
    @IsString()
    password: string

}