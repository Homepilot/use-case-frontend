import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';
import { ToBoolean } from 'src/utils/transformer/to-boolean.transfomer';

export class UnitFindParamsDto {
    @ApiPropertyOptional({
        description: 'Number of items to return',
        default: 10,
        minimum: 1,
        maximum: 50,
    })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(50)
    @IsOptional()
    readonly take?: number = 10;

    @ApiPropertyOptional({
        description: 'Number of items to skip',
        default: 0,
    })
    @Type(() => Number)
    @IsInt()
    @Min(0)
    @IsOptional()
    readonly skip?: number = 0;

    @ApiPropertyOptional({
        description: 'Include in response landlord linked to unit',
    })
    @Type(() => Boolean)
    @ToBoolean()
    @IsOptional()
    readonly include_landlord?: boolean;
}
