import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { TypeOrmAccount } from './typeorm-account'

@Entity('transaction')
export class TypeOrmTransaction {
    @PrimaryGeneratedColumn('uuid', { primaryKeyConstraintName: 'transaction_pk' })
    id: string

    @ManyToMany(() => TypeOrmAccount, (typeOrmAccount) => typeOrmAccount.id)
    debitedAccountId: TypeOrmAccount

    @ManyToMany(() => TypeOrmAccount, (typeOrmAccount) => typeOrmAccount.id)
    creditedAccountId: TypeOrmAccount

    @Column()
    values: number

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    created_at: Date
}
