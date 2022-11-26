import { Keranjang } from "src/keranjang/entities/keranjang.entity";
import { Pengajuan } from "src/pengajuan/entities/pengajuan.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Property {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: '' })
    title: string

    @Column({ default: '' })
    img1: string

    @Column({ default: '' })
    img2: string

    @Column({ default: '' })
    img3: string

    @Column({ default: '' })
    img4: string

    @Column({ default: '' })
    img5: string

    @Column({ default: '' })
    alamat: string

    @Column({ default: '' })
    sertifikat: string

    @Column({ default: '' })
    luas_bangunan: string

    @Column({ default: '' })
    luas_tanah: string

    @Column({ default: '' })
    interior: string

    @Column({ default: '' })
    tahun_dibuat: string

    @Column({ default: '' })
    lantai: string

    @Column({ default: '' })
    listrik: string

    @Column({ default: '' })
    parkir: string

    @Column({ default: '' })
    harga: string

    @Column({ type: 'longtext' })
    desk: string

    @Column({ default: '' })
    kategori: string

    @Column({ default: '' })
    status: string

    // fasilitas
    @Column({ default: '' })
    fasilitas: string

    // prasarana
    @Column({ default: 0 })
    balkon: number

    @Column({ default: 0 })
    unit_pojokan: number

    @Column({ default: 0 })
    taman: number

    @Column({ default: 0 })
    teras: number

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    create_at: Date;

    @ManyToOne(() => User, u => u.property, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    user: User

    @OneToMany(() => Pengajuan, p => p.property, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    pengajuan: Pengajuan

    @OneToMany(() => Keranjang, p => p.property, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    propertyFav: Keranjang
}
