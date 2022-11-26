import { PartialType } from '@nestjs/swagger';
import { SponsorDto } from './create-sponsor.dto';

export class UpdateSponsorDto extends PartialType(SponsorDto) { }
