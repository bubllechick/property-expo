import { Jasa } from "src/jasa/entities/jasa.entity";
import { Property } from "src/property/entities/property.entity";
import { User } from "src/user/entities/user.entity";
import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class JasaFav {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    create_at: Date;

    @ManyToOne(() => User, u => u.favJasa, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    user: User

    // @ManyToOne(() => Property, p => p.keranjang, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    // property: Property

    @ManyToOne(() => Jasa, p => p.jasaFav, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    jasa: Jasa
}
