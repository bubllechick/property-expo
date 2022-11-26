import { ApiProperty, OmitType } from "@nestjs/swagger"
import { IsObject, IsString } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"
import { PrimaryGeneratedColumn } from "typeorm"

export class KeranjangDto {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @IsObject()
    user: UserDto

    @ApiProperty({ default: '' })
    @IsString()
    property_id: string

}
export class CreateKeranjangDto extends OmitType(KeranjangDto, ['id']) { }

export class JasaFavDto {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @IsObject()
    user: UserDto

    @ApiProperty({ default: '' })
    @IsString()
    jasa_id: string
}
export class CreateJasaFavDto extends OmitType(JasaFavDto, ['id']) { }
