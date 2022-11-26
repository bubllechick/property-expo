import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { IsNumber, IsObject, IsString } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"

export class PropertyDto {

    @ApiProperty({ default: '' })
    @IsString()
    id: string

    @ApiProperty({ default: '' })
    @IsString()
    title: string

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
    sertifikat: string

    @ApiProperty({ default: '' })
    @IsString()
    luas_bangunan: string

    @ApiProperty({ default: '' })
    @IsString()
    luas_tanah: string

    @ApiProperty({ default: '' })
    @IsString()
    interior: string

    @ApiProperty({ default: '' })
    @IsString()
    tahun_dibuat: string

    @ApiProperty({ default: '' })
    @IsString()
    lantai: string

    @ApiProperty({ default: '' })
    @IsString()
    listrik: string

    @ApiProperty({ default: '' })
    @IsString()
    parkir: string

    @ApiProperty({ default: '' })
    @IsString()
    harga: string

    @ApiProperty({ default: '' })
    @IsString()
    desk: string

    @ApiProperty({ default: '' })
    @IsString()
    kategori: string

    @ApiProperty({ default: '' })
    @IsString()
    status: string

    @ApiProperty({ default: '' })
    @IsString()
    fasilitas: string

    @ApiProperty({ default: 0 })
    @IsNumber()
    balkon: number

    @ApiProperty({ default: 0 })
    @IsNumber()
    taman: number

    @ApiProperty({ default: 0 })
    @IsNumber()
    teras: number

    @ApiProperty({ default: 0 })
    @IsNumber()
    unit_pojokan: number

    @IsObject()
    user: UserDto
}

export class CreatePropertyDto extends OmitType(PropertyDto, ['id']) { }
export class CreateTanahDto extends PickType(PropertyDto, [
    'img1', 'img2', 'img3', 'img4', 'img5',
    'luas_tanah',
    'harga',
    'alamat',
    'desk',
    'sertifikat',
    'user'
]) { }
export class UpdateTanahDto extends PickType(PropertyDto, [
    'id', 'img1', 'img2', 'img3', 'img4', 'img5',
    'luas_tanah',
    'harga',
    'alamat',
    'desk',
    'sertifikat',
    'user'
]) { }