import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class BannerHomeDown {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string;

    @Column()
    img: string;

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    create_at: Date;
}