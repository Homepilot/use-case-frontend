import {
    HttpCode,
    HttpException,
    HttpStatus,
    Injectable,
} from '@nestjs/common';
import { Prisma, Unit } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { LandlordService } from '../landlord/landlord.service';

@Injectable()
export class UnitService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly landlordService: LandlordService,
    ) {}

    async findManyPaginated(params: Prisma.UnitFindManyArgs) {
        const { where } = params;
        const [units, count] = await this.prismaService.$transaction([
            this.prismaService.unit.findMany(params),
            this.prismaService.unit.count({ where }),
        ]);

        return {
            rows: units,
            count,
        };
    }

    async create(data: Prisma.UnitUncheckedCreateInput): Promise<Unit> {
        await this.landlordService.findUniqueOrThrowWithID(
            data.landlord_id as number,
        );

        return this.prismaService.unit.create({ data });
    }

    async update(
        id: number,
        data: Prisma.UnitUncheckedUpdateInput,
    ): Promise<Unit> {
        await this.findUniqueOrThrowWithID(id);
        if (data?.landlord_id)
            await this.landlordService.findUniqueOrThrowWithID(
                data.landlord_id as number,
            );

        return this.prismaService.unit.update({ data, where: { id } });
    }

    async delete(id: number): Promise<Unit> {
        await this.findUniqueOrThrowWithID(id);

        return this.prismaService.unit.delete({ where: { id } });
    }

    async findUnique(params: Prisma.UnitFindUniqueArgs): Promise<Unit> {
        return this.prismaService.unit.findUnique(params);
    }

    async findUniqueWithID(id: number): Promise<Unit> {
        return this.prismaService.unit.findUnique({ where: { id } });
    }

    async findUniqueOrThrowWithID(id: number): Promise<Unit> {
        const unit = await this.findUniqueWithID(id);

        if (!unit)
            throw new HttpException('Unit not found', HttpStatus.NOT_FOUND);
        return unit;
    }
}
