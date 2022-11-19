import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { TypeOrmAccount } from './typeorm-account'

@Entity('user')
export class TypeOrmUser {
    @PrimaryGeneratedColumn('uuid', { primaryKeyConstraintName: 'user_pk' })
    id: string

    @Column()
    username: string

    @Column()
    password: string

    @OneToOne(() => TypeOrmAccount, (typeOrmAccount) => typeOrmAccount.id)
    accountId: TypeOrmAccount
}
