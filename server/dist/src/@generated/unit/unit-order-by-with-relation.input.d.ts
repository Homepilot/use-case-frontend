import { SortOrder } from '../prisma/sort-order.enum';
import { LandlordOrderByWithRelationInput } from '../landlord/landlord-order-by-with-relation.input';
export declare class UnitOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    landlord_id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    surface?: keyof typeof SortOrder;
    furnished?: keyof typeof SortOrder;
    rent_amount?: keyof typeof SortOrder;
    photo_url?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    landlord?: LandlordOrderByWithRelationInput;
}