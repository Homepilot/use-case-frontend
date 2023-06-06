import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class LandlordScalarWhereInput {
    AND?: Array<LandlordScalarWhereInput>;
    OR?: Array<LandlordScalarWhereInput>;
    NOT?: Array<LandlordScalarWhereInput>;
    id?: IntFilter;
    unit_id?: IntFilter;
    gender?: StringFilter;
    first_name?: StringFilter;
    last_name?: StringFilter;
    created_at?: DateTimeFilter;
    updated_at?: DateTimeFilter;
}
