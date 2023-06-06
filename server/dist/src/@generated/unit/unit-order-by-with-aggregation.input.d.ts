import { SortOrder } from '../prisma/sort-order.enum';
import { UnitCountOrderByAggregateInput } from './unit-count-order-by-aggregate.input';
import { UnitAvgOrderByAggregateInput } from './unit-avg-order-by-aggregate.input';
import { UnitMaxOrderByAggregateInput } from './unit-max-order-by-aggregate.input';
import { UnitMinOrderByAggregateInput } from './unit-min-order-by-aggregate.input';
import { UnitSumOrderByAggregateInput } from './unit-sum-order-by-aggregate.input';
export declare class UnitOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    landlord_id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    surface?: keyof typeof SortOrder;
    furnished?: keyof typeof SortOrder;
    rent_amount?: keyof typeof SortOrder;
    photo_url?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    _count?: UnitCountOrderByAggregateInput;
    _avg?: UnitAvgOrderByAggregateInput;
    _max?: UnitMaxOrderByAggregateInput;
    _min?: UnitMinOrderByAggregateInput;
    _sum?: UnitSumOrderByAggregateInput;
}
