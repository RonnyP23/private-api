import {IsEmail, IsNotEmpty, IsNumber, IsString} from 'class-validator';


export class CreateAccountSchema {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    
    @IsString()
    telefone: string;

    
    @IsString()
    cpf: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNumber()
    userLevel: number;

}