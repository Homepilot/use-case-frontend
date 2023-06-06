import { UnitCreateNestedManyWithoutLandlordInput } from '../unit/unit-create-nested-many-without-landlord.input';
export declare class LandlordCreateInput {
    gender: string;
    first_name: string;
    last_name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Unit?: UnitCreateNestedManyWithoutLandlordInput;
}
