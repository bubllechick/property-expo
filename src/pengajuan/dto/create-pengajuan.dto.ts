import { Optional } from "@nestjs/common"
import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { IsNumber, IsObject, IsString } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"

export class PengajuanDto {
    @ApiProperty({ default: '' })
    @Optional()
    id: string

    @ApiProperty({ default: '' })
    @IsString()
    nama: string

    @ApiProperty({ default: '' })
    @IsString()
    ktp: string

    @ApiProperty({ default: '' })
    @IsString()
    tmpt_lahir: string

    @ApiProperty({ default: '' })
    @IsString()
    tgl_lahir: string

    @ApiProperty({ default: '' })
    @IsString()
    jenis_kelamin: string

    @ApiProperty({ default: '' })
    @IsString()
    alamat: string

    @ApiProperty({ default: '' })
    @IsString()
    provinsi: string

    @ApiProperty({ default: '' })
    @IsString()
    kota: string

    @ApiProperty({ default: '' })
    @IsString()
    kelurahan: string

    @ApiProperty({ default: '' })
    @IsString()
    desa: string

    @ApiProperty({ default: '' })
    @IsString()
    rt: string

    @ApiProperty({ default: '' })
    @IsString()
    rw: string

    @ApiProperty({ default: '' })
    @IsString()
    kode_pos: string

    // info pekerjaan
    @ApiProperty({ default: '' })
    @IsString()
    jenis_pekerjaan: string

    @ApiProperty({ default: '' })
    @IsString()
    nama_perusahaan: string

    @ApiProperty({ default: '' })
    @IsString()
    tlp_perusahaan: string

    @ApiProperty({ default: '' })
    @IsString()
    penghasilan_perbulan: string

    @ApiProperty({ default: '' })
    @IsString()
    pengeluaran_lain: string

    @ApiProperty({ default: '' })
    @IsString()
    biaya_hidup: string

    @ApiProperty({ default: '' })
    @IsString()
    bank: string

    @ApiProperty({ default: 0 })
    @IsNumber()
    tenor: number

    @IsObject()
    user: UserDto

    @ApiProperty({ default: '' })
    @IsString()
    property_id: string
}
export class CreatePengajuanDto extends OmitType(PengajuanDto, ['id']) { }
export class PengajuanIdDto extends PickType(PengajuanDto, ['id']) { }