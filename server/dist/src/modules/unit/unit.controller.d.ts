import { FindManyUnitArgs } from 'src/@generated/unit/find-many-unit.args';
import { UnitService } from './unit.service';
import { UnitUpdateInput } from 'src/@generated/unit/unit-update.input';
import { Unit } from 'src/@generated/unit/unit.model';
export declare class UnitController {
    private readonly unitService;
    constructor(unitService: UnitService);
    findAll(params: FindManyUnitArgs): Promise<{
        rows: import(".prisma/client").Unit[];
        count: number;
    }>;
    update(id: number, data: UnitUpdateInput): Promise<Unit>;
    delete(id: number): Promise<Unit>;
}
