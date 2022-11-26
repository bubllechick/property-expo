import { PartialType } from '@nestjs/swagger';
import { PengajuanDto } from './create-pengajuan.dto';

export class UpdatePengajuanDto extends PartialType(PengajuanDto) {}
