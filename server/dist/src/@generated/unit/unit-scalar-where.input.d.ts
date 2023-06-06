import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class UnitScalarWhereInput {
    AND?: Array<UnitScalarWhereInput>;
    OR?: Array<UnitScalarWhereInput>;
    NOT?: Array<UnitScalarWhereInput>;
    id?: IntFilter;
    landlord_id?: IntFilter;
    name?: StringFilter;
    surface?: IntFilter;
    furnished?: BoolFilter;
    rent_amount?: IntFilter;
    photo_url?: StringFilter;
    created_at?: DateTimeFilter;
    updated_at?: DateTimeFilter;
}
