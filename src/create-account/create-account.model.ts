import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'
@Entity()
export class CreateAccountModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:120})
    name: string;

    @Column({length:255})
    email: string;

    @Column({length: 50})
    telefone: string;

    @Column({length:50})

    @Column()
    cpf: string;

    @Column()
    password: string;

    @Column()
    userLevel: number;
}