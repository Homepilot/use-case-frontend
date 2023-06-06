import { SortOrder } from '../prisma/sort-order.enum';
import { UnitOrderByRelationAggregateInput } from '../unit/unit-order-by-relation-aggregate.input';
export declare class LandlordOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    gender?: keyof typeof SortOrder;
    first_name?: keyof typeof SortOrder;
    last_name?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    Unit?: UnitOrderByRelationAggregateInput;
}
