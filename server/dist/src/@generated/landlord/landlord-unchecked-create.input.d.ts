import { UnitUncheckedCreateNestedManyWithoutLandlordInput } from '../unit/unit-unchecked-create-nested-many-without-landlord.input';
export declare class LandlordUncheckedCreateInput {
    id?: number;
    gender: string;
    first_name: string;
    last_name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Unit?: UnitUncheckedCreateNestedManyWithoutLandlordInput;
}
