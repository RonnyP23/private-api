import { ApiProperty } from '@nestjs/swagger';
import {IsEmail, IsNotEmpty, IsNumber, IsString} from 'class-validator';


export class CreateAccountSchema {
    @ApiProperty({
        description: 'Nome de usuario',
        example: 'Ronny paulo'
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        description: 'email de usuario',
        example: 'Ronnypaulo@gmail.com'
    })
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @ApiProperty()
    @IsString()
    telefone: string;

    @ApiProperty()
    @IsString()
    cpf: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;
}