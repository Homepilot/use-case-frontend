import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNumber, IsString, Min } from 'class-validator';

export class UnitCreateDto {
    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @Min(1)
    @IsNumber()
    readonly surface: number;

    @ApiProperty()
    @IsBoolean()
    readonly furnished: boolean;

    @ApiProperty()
    @Min(1)
    @IsNumber()
    readonly rent_amount: number;

    @ApiProperty()
    @IsString()
    readonly photo_url: string;

    @ApiProperty()
    @IsInt()
    readonly landlord_id: number;
}
