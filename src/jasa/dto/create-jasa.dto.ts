import { Optional } from "@nestjs/common"
import { ApiProperty, OmitType } from "@nestjs/swagger"
import { IsObject, IsString } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"

export class JasaDto {
    @ApiProperty({ default: '' })
    @Optional()
    id: string

    @ApiProperty({ default: '' })
    @IsString()
    title: string

    @ApiProperty({ default: '' })
    @IsString()
    nama_perusahaan: string

    @ApiProperty({ default: '' })
    @IsString()
    img1: string

    @ApiProperty({ default: '' })
    @IsString()
    img2: string

    @ApiProperty({ default: '' })
    @IsString()
    img3: string

    @ApiProperty({ default: '' })
    @IsString()
    img4: string

    @ApiProperty({ default: '' })
    @IsString()
    img5: string

    @ApiProperty({ default: '' })
    @IsString()
    alamat: string

    @ApiProperty({ default: '' })
    @IsString()
    jenis_jasa: string

    @ApiProperty({ default: '' })
    @IsString()
    harga: string

    @ApiProperty({ default: '' })
    @IsString()
    desk: string

    @IsObject()
    user: UserDto;
}
// CreateJasaDto
export class CreateJasaDto extends OmitType(JasaDto, ['id']) { }