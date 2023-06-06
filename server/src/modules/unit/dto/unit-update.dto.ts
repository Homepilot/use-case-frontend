import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsInt,
    IsNumber,
    IsObject,
    IsOptional,
    IsString,
} from 'class-validator';

export class UnitUpdateDto {
    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsNumber()
    readonly surface: number;

    @ApiProperty()
    @IsBoolean()
    readonly furnished: boolean;

    @ApiProperty()
    @IsNumber()
    readonly rent_amount: number;

    @ApiProperty()
    @IsString()
    readonly photo_url: string;

    @ApiProperty()
    @IsInt()
    readonly landlord_id: number;
}
