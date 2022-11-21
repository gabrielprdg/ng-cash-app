import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('account')
export class TypeOrmAccount {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    balance: number
}
