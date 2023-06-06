import { Landlord, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
export declare class LandlordService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findManyPaginated(params: Prisma.LandlordFindManyArgs): Promise<{
        rows: Landlord[];
        count: number;
    }>;
    findUnique(params: Prisma.LandlordFindUniqueArgs): Promise<Landlord>;
    findOneWithID(id: number): Promise<Landlord>;
    getDisplayName(landlord: Landlord): string;
}
