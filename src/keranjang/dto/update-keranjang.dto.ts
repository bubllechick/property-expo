import { PartialType } from '@nestjs/swagger';
import { JasaFavDto, KeranjangDto } from './create-keranjang.dto';

export class UpdateKeranjangDto extends PartialType(KeranjangDto) {}

export class UpdateJasaFavDto extends PartialType(JasaFavDto) {}
