import { PartialType } from '@nestjs/swagger';
import { JasaDto } from './create-jasa.dto';

export class UpdateJasaDto extends PartialType(JasaDto) {}
