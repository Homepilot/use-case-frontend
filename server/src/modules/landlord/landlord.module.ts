import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { LandlordService } from './landlord.service';
import { LandlordResolver } from './landlord.resolver';

@Module({
    imports: [PrismaModule],
    providers: [LandlordService, LandlordResolver],
    exports: [LandlordService],
})
export class LandlordModule {}
