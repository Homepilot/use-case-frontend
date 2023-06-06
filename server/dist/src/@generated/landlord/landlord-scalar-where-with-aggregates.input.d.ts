import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class LandlordScalarWhereWithAggregatesInput {
    AND?: Array<LandlordScalarWhereWithAggregatesInput>;
    OR?: Array<LandlordScalarWhereWithAggregatesInput>;
    NOT?: Array<LandlordScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    gender?: StringWithAggregatesFilter;
    first_name?: StringWithAggregatesFilter;
    last_name?: StringWithAggregatesFilter;
    created_at?: DateTimeWithAggregatesFilter;
    updated_at?: DateTimeWithAggregatesFilter;
}
