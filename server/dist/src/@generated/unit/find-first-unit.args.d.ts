import { UnitWhereInput } from './unit-where.input';
import { UnitOrderByWithRelationInput } from './unit-order-by-with-relation.input';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
import { UnitScalarFieldEnum } from './unit-scalar-field.enum';
export declare class FindFirstUnitArgs {
    where?: UnitWhereInput;
    orderBy?: Array<UnitOrderByWithRelationInput>;
    cursor?: UnitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UnitScalarFieldEnum>;
}
