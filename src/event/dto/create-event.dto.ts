import { Optional } from "@nestjs/common"
import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { IsObject, IsString } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"

export class EventDto {
    @ApiProperty({ default: '' })
    @Optional()
    id: string

    @ApiProperty({ default: '' })
    @IsString()
    title: string

    @ApiProperty({ default: '' })
    @IsString()
    img:string

    @ApiProperty({ default: '' })
    @IsString()
    start_date: string

    @ApiProperty({ default: '' })
    @IsString()
    end_date: string

    @ApiProperty({ default: '' })
    @IsString()
    location: string

    @ApiProperty({ default: '' })
    @IsString()
    desc: string

    @IsObject()
    user: UserDto
}
export class CreateEventDto extends OmitType(EventDto, ['id']) { }
export class EventIdDto extends PickType(EventDto, ['id']) { }
