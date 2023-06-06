import { LandlordCreateWithoutUnitInput } from './landlord-create-without-unit.input';
import { LandlordCreateOrConnectWithoutUnitInput } from './landlord-create-or-connect-without-unit.input';
import { LandlordUpsertWithoutUnitInput } from './landlord-upsert-without-unit.input';
import { LandlordWhereUniqueInput } from './landlord-where-unique.input';
import { LandlordUpdateWithoutUnitInput } from './landlord-update-without-unit.input';
export declare class LandlordUpdateOneRequiredWithoutUnitNestedInput {
    create?: LandlordCreateWithoutUnitInput;
    connectOrCreate?: LandlordCreateOrConnectWithoutUnitInput;
    upsert?: LandlordUpsertWithoutUnitInput;
    connect?: LandlordWhereUniqueInput;
    update?: LandlordUpdateWithoutUnitInput;
}
