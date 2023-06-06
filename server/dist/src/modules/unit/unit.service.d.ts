import { Prisma, Unit } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { LandlordService } from '../landlord/landlord.service';
export declare class UnitService {
    private readonly prismaService;
    private readonly landlordService;
    constructor(prismaService: PrismaService, landlordService: LandlordService);
    findManyPaginated(params: Prisma.UnitFindManyArgs): Promise<{
        rows: Unit[];
        count: number;
    }>;
    createUnit(data: Prisma.UnitCreateInput): Promise<Unit>;
    updateUnit(id: number, data: Prisma.UnitUpdateInput): Promise<Unit>;
    deleteUnit(id: number): Promise<Unit>;
}
