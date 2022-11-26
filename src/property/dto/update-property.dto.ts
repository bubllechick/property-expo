import { PartialType } from '@nestjs/swagger';
import { PropertyDto } from './create-property.dto';

export class UpdatePropertyDto extends PartialType(PropertyDto) { }
