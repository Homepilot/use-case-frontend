import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Query,
} from '@nestjs/common';
import { UnitService } from './unit.service';
import { UnitUpdateDto } from './dto/unit-update.dto';
import { ApiResponse } from '@nestjs/swagger';
import { UnitDto } from './dto/unit.dto';
import { HttpErrorResponseDto } from 'src/utils/dto/http-error-response.dto';
import { UnitFindParamsDto } from './dto/unit-find.params.dto';
import { UnitCreateDto } from './dto/unit-create.dto';

@Controller('units')
export class UnitController {
    constructor(private readonly unitService: UnitService) {}

    @ApiResponse({
        status: 200,
        description: 'OK',
        type: UnitDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Bad Request',
        type: HttpErrorResponseDto,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
        type: HttpErrorResponseDto,
    })
    @Get()
    findAll(@Query() params: UnitFindParamsDto) {
        const { include_landlord, ...rest } = params;

        return this.unitService.findManyPaginated({
            ...rest,
            include: { landlord: include_landlord },
        });
    }

    @ApiResponse({
        status: 200,
        description: 'OK',
        type: UnitDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Bad Request',
        type: HttpErrorResponseDto,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
        type: HttpErrorResponseDto,
    })
    @Post()
    create(@Body() unit: UnitCreateDto) {
        return this.unitService.create(unit);
    }

    @ApiResponse({
        status: 200,
        description: 'OK',
        type: UnitDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Bad Request',
        type: HttpErrorResponseDto,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
        type: HttpErrorResponseDto,
    })
    @Post(':id')
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() unit: UnitUpdateDto,
    ) {
        return this.unitService.update(id, unit);
    }

    @ApiResponse({
        status: 200,
        description: 'OK',
        type: UnitDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Bad Request',
        type: HttpErrorResponseDto,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
        type: HttpErrorResponseDto,
    })
    @Delete(':id')
    delete(@Param('id', new ParseIntPipe()) id: number) {
        return this.unitService.delete(id);
    }
}
