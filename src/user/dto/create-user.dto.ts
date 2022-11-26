import { Optional } from "@nestjs/common";
import { ApiProperty, OmitType, PickType } from "@nestjs/swagger";
import { IsString } from 'class-validator';


export class UserDto {
    @ApiProperty({default: ''})
    @Optional()
    id?: string

    @ApiProperty({default: ''})
    @IsString()
    nama: string;

    @ApiProperty({default: ''})
    @IsString()
    no_telp: string;

    @ApiProperty({default: ''})
    @IsString()
    password: string;

    @ApiProperty({default: ''})
    @IsString()
    foto: string;

}
export class CreateUserDto extends OmitType(UserDto, ['id']) { }
export class UserIdDto extends PickType(UserDto, ['id']) { }