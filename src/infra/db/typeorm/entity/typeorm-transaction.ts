import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { TypeOrmAccount } from './typeorm-account'

@Entity('transaction')
export class TypeOrmTransaction {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => TypeOrmAccount, (typeOrmAccount) => typeOrmAccount.id)
    debitedAccountId: TypeOrmAccount

    @ManyToOne(() => TypeOrmAccount, (typeOrmAccount) => typeOrmAccount.id)
    creditedAccountId: TypeOrmAccount

    @Column()
    value: number

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    created_at: Date
}
