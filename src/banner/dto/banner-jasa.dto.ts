import { Optional } from "@nestjs/common";
import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class BannerJasaDto {
    @ApiProperty()
    @Optional()
    id: string

    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    img: string;
}
export class CreateBannerJasaDto extends OmitType(BannerJasaDto, ['id']) {}