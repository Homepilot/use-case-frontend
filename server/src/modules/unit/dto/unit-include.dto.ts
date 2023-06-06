import { ApiExtraModels, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

@ApiExtraModels()
export class UnitIncludeParamsDto {
    @ApiPropertyOptional({
        default: false,
    })
    @Type(() => Boolean)
    @IsBoolean()
    @IsOptional()
    readonly landlord?: boolean = false;
}
