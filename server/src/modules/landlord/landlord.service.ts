import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Landlord, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LandlordService {
    constructor(private readonly prismaService: PrismaService) {}

    async findManyPaginated(params: Prisma.LandlordFindManyArgs) {
        const { where } = params;
        const [units, count] = await this.prismaService.$transaction([
            this.prismaService.landlord.findMany(params),
            this.prismaService.landlord.count({ where }),
        ]);

        return {
            rows: units,
            count,
        };
    }

    async findUnique(params: Prisma.LandlordFindUniqueArgs) {
        return this.prismaService.landlord.findUnique(params);
    }

    async findUniqueWithID(id: number) {
        return this.prismaService.landlord.findUnique({ where: { id } });
    }

    async findUniqueOrThrowWithID(id: number) {
        const landlord = await this.findUniqueWithID(id);

        if (!landlord)
            throw new HttpException('Landlord not found', HttpStatus.NOT_FOUND);
        return landlord;
    }

    getDisplayName(landlord: Landlord) {
        const { gender, first_name, last_name } = landlord;
        const display_gender = gender === 'female' ? 'Ms.' : 'Mr.';
        const display_name = `${last_name} ${first_name}`;

        return `${display_gender} ${display_name}`;
    }
}
