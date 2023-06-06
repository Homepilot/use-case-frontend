import { LandlordCreateNestedOneWithoutUnitInput } from '../landlord/landlord-create-nested-one-without-unit.input';
export declare class UnitCreateInput {
    name: string;
    surface: number;
    furnished: boolean;
    rent_amount: number;
    photo_url: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    landlord: LandlordCreateNestedOneWithoutUnitInput;
}
