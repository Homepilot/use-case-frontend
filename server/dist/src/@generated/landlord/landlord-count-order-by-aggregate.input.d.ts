import { SortOrder } from '../prisma/sort-order.enum';
export declare class LandlordCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    gender?: keyof typeof SortOrder;
    first_name?: keyof typeof SortOrder;
    last_name?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
}
