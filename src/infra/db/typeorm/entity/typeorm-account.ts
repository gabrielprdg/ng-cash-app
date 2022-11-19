import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('account')
export class TypeOrmAccount {
    @PrimaryGeneratedColumn('uuid', { primaryKeyConstraintName: 'account_pk' })
    id: string

    @Column()
    balance: number
}
