import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UnitListRelationFilter } from '../unit/unit-list-relation-filter.input';
export declare class LandlordWhereInput {
    AND?: Array<LandlordWhereInput>;
    OR?: Array<LandlordWhereInput>;
    NOT?: Array<LandlordWhereInput>;
    id?: IntFilter;
    gender?: StringFilter;
    first_name?: StringFilter;
    last_name?: StringFilter;
    created_at?: DateTimeFilter;
    updated_at?: DateTimeFilter;
    Unit?: UnitListRelationFilter;
}
