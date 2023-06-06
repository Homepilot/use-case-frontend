import { UnitService } from './unit.service';
import { LandlordService } from '../landlord/landlord.service';
import { FindManyUnitArgs } from 'src/@generated/unit/find-many-unit.args';
import { UnitCreateInput } from 'src/@generated/unit/unit-create.input';
import { Unit } from 'src/@generated/unit/unit.model';
import { UnitUpdateInput } from 'src/@generated/unit/unit-update.input';
export declare class UnitResolver {
    private readonly unitService;
    private readonly landlordService;
    constructor(unitService: UnitService, landlordService: LandlordService);
    units(params: FindManyUnitArgs): Promise<{
        rows: import(".prisma/client").Unit[];
        count: number;
    }>;
    landlord(unit: Unit): Promise<import(".prisma/client").Landlord>;
    createUnit(data: UnitCreateInput): Promise<import(".prisma/client").Unit>;
    updateUnit(id: number, data: UnitUpdateInput): Promise<import(".prisma/client").Unit>;
    deleteUnit(id: number): Promise<import(".prisma/client").Unit>;
}
