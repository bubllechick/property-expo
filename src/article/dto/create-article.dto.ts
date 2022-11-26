import { Optional } from "@nestjs/common"
import { ApiProperty, OmitType } from "@nestjs/swagger"
import { IsObject, IsString } from "class-validator"
import { UserDto } from "src/user/dto/create-user.dto"

export class ArticleDto {

    @ApiProperty({ default: '' })
    @Optional()
    id: string

    @ApiProperty({ default: '' })
    @IsString()
    title: string

    @ApiProperty({ default: '' })
    @IsString()
    img: string

    @ApiProperty({ default: '' })
    @IsString()
    desk: string

    @IsObject()
    user: UserDto
}
export class CreateArticleDto extends OmitType(ArticleDto, ['id']) { }