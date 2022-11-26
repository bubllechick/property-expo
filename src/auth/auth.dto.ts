import { ApiProperty, PickType } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class AuthDto {

    @ApiProperty({default: ''})
    @IsString()
    no_hp: string

    @ApiProperty({default: ''})
    @IsString()
    password: string

}