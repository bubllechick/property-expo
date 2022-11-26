import { Article } from "src/article/entities/article.entity";
import { Event } from "src/event/entities/event.entity";
import { Jasa } from "src/jasa/entities/jasa.entity";
import { JasaFav } from "src/keranjang/entities/jasa-fav.entity";
import { Keranjang } from "src/keranjang/entities/keranjang.entity";
import { Pengajuan } from "src/pengajuan/entities/pengajuan.entity";
import { Property } from "src/property/entities/property.entity";
import { Sponsor } from "src/sponsor/entities/sponsor.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nama: string;

    @Column()
    no_telp: string;

    @Column()
    password: string;

    @Column()
    foto: string;

    @Column()
    role: string

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    create_at: Date;

    @OneToMany(() => Property, p => p.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    property: Property

    @OneToMany(() => Jasa, p => p.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    jasa: Jasa

    @OneToMany(() => Pengajuan, pg => pg.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    pengajuan: Pengajuan

    @OneToMany(() => Event, e => e.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    event: Event

    @OneToMany(() => Keranjang, e => e.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    favPro: Keranjang

    @OneToMany(() => JasaFav, e => e.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    favJasa: JasaFav

    @OneToMany(() => Article, e => e.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    article: Article

    @OneToMany(() => Sponsor, e => e.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    sponsor: Sponsor
}
