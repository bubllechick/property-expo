import { Optional } from "@nestjs/common"
import { ApiProperty, OmitType } from "@nestjs/swagger"
import { IsObject, IsString } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"

export class SponsorDto {

    @ApiProperty()
    @Optional()
    id: string

    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    img: string

    @IsObject()
    user: UserDto
}

export class CreateSponsorDto extends OmitType(SponsorDto, ['id']) { }
