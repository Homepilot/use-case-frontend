import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class UnitScalarWhereWithAggregatesInput {
    AND?: Array<UnitScalarWhereWithAggregatesInput>;
    OR?: Array<UnitScalarWhereWithAggregatesInput>;
    NOT?: Array<UnitScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    landlord_id?: IntWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    surface?: IntWithAggregatesFilter;
    furnished?: BoolWithAggregatesFilter;
    rent_amount?: IntWithAggregatesFilter;
    photo_url?: StringWithAggregatesFilter;
    created_at?: DateTimeWithAggregatesFilter;
    updated_at?: DateTimeWithAggregatesFilter;
}
