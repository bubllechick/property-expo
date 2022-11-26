import { JasaFav } from "src/keranjang/entities/jasa-fav.entity";
import { Keranjang } from "src/keranjang/entities/keranjang.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Jasa {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: '' })
    title: string

    @Column()
    nama_perusahaan: string

    @Column()
    img1: string

    @Column()
    img2: string

    @Column()
    img3: string

    @Column()
    img4: string

    @Column()
    img5: string

    @Column()
    alamat: string

    @Column()
    jenis_jasa: string

    @Column()
    harga: string

    @Column({ type: 'longtext' })
    desk: string

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    create_at: Date;

    @ManyToOne(() => User, u => u.jasa, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    user: User

    @OneToMany(() => JasaFav, k => k.jasa, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    jasaFav: JasaFav
}
