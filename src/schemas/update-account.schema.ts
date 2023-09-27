import {IsEmail, IsString} from 'class-validator';


export class UpdateAccountSchema {
    name: string;
    email: string;
    telefone: string;
    cpf: string;

}