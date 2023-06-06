import { SortOrder } from '../prisma/sort-order.enum';
import { LandlordCountOrderByAggregateInput } from './landlord-count-order-by-aggregate.input';
import { LandlordAvgOrderByAggregateInput } from './landlord-avg-order-by-aggregate.input';
import { LandlordMaxOrderByAggregateInput } from './landlord-max-order-by-aggregate.input';
import { LandlordMinOrderByAggregateInput } from './landlord-min-order-by-aggregate.input';
import { LandlordSumOrderByAggregateInput } from './landlord-sum-order-by-aggregate.input';
export declare class LandlordOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    gender?: keyof typeof SortOrder;
    first_name?: keyof typeof SortOrder;
    last_name?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    _count?: LandlordCountOrderByAggregateInput;
    _avg?: LandlordAvgOrderByAggregateInput;
    _max?: LandlordMaxOrderByAggregateInput;
    _min?: LandlordMinOrderByAggregateInput;
    _sum?: LandlordSumOrderByAggregateInput;
}
