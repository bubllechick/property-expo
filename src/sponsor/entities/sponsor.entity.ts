import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Sponsor {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    img: string

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    create_at: Date;

    @ManyToOne(() => User, u => u.sponsor, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    user: User
}
