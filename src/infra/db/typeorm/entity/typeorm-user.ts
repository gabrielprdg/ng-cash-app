import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { TypeOrmAccount } from './typeorm-account'

@Entity('user')
export class TypeOrmUser {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    username: string

    @Column()
    password: string

    @OneToOne(() => TypeOrmAccount, (typeOrmAccount) => typeOrmAccount.id)
    @JoinColumn()
    account: TypeOrmAccount
}
