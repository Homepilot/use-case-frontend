import { ApiProperty } from '@nestjs/swagger';

export class UnitDto {
    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly landlord_id: number;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly surface: number;

    @ApiProperty()
    readonly furnished: boolean;

    @ApiProperty()
    readonly rent_amount: number;

    @ApiProperty()
    readonly photo_url: string;

    @ApiProperty()
    readonly created_at: Date;

    @ApiProperty()
    readonly updated_at: Date;
}
