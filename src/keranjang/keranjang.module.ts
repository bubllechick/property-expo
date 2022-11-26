import { Module } from '@nestjs/common';
import { KeranjangService } from './keranjang.service';
import { KeranjangController } from './keranjang.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Keranjang } from './entities/keranjang.entity';
import { JasaFav } from './entities/jasa-fav.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Keranjang, JasaFav
    ]),
  ],
  controllers: [KeranjangController],
  providers: [KeranjangService]
})
export class KeranjangModule { }
