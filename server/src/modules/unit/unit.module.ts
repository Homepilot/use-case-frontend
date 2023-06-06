import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { UnitResolver } from './unit.resolver';
import { UnitService } from './unit.service';
import { LandlordModule } from '../landlord/landlord.module';
import { UnitController } from './unit.controller';

@Module({
    imports: [PrismaModule, LandlordModule],
    providers: [UnitResolver, UnitService],
    controllers: [UnitController],
})
export class UnitModule {}
