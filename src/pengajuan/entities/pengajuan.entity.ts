import { Property } from "src/property/entities/property.entity"
import { User } from "src/user/entities/user.entity"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Pengajuan {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: '' })
    nama: string

    @Column({ default: '' })
    ktp: string

    @Column({ default: '' })
    tmpt_lahir: string

    @Column({ default: '' })
    tgl_lahir: string

    @Column({ default: '' })
    jenis_kelamin: string

    @Column({ default: '' })
    alamat: string

    @Column({ default: '' })
    provinsi: string

    @Column({ default: '' })
    kota: string

    @Column({ default: '' })
    kelurahan: string

    @Column({ default: '' })
    desa: string

    @Column({ default: '' })
    rt: string

    @Column({ default: '' })
    rw: string

    @Column({ default: '' })
    kode_pos: string

    // info pekerjaan
    @Column({ default: '' })
    jenis_pekerjaan: string

    @Column({ default: '' })
    nama_perusahaan: string

    @Column({ default: '' })
    tlp_perusahaan: string

    @Column({ default: '' })
    penghasilan_perbulan: string

    @Column({ default: '' })
    pengeluaran_lain: string

    @Column({ default: '' })
    biaya_hidup: string

    @Column({ default: '' })
    bank: string

    @Column({ default: 0 })
    tenor: number

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date

    @ManyToOne(() => User, u => u.pengajuan, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    user: User

    @ManyToOne(() => Property, p => p.pengajuan, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    property: Property
}
