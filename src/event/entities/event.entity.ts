import { User } from "src/user/entities/user.entity"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Event {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: '' })
    title: string

    @Column({ default: '' })
    img: string

    @Column({ default: '' })
    start_date: string

    @Column({ default: '' })
    end_date: string

    @Column({ default: '' })
    location: string

    @Column({ type: 'longtext' })
    desc: string

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    create_at: Date;

    @ManyToOne(() => User, u => u.event, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    user: User
}
