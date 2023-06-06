import { UnitCreateWithoutLandlordInput } from './unit-create-without-landlord.input';
import { UnitCreateOrConnectWithoutLandlordInput } from './unit-create-or-connect-without-landlord.input';
import { UnitUpsertWithoutLandlordInput } from './unit-upsert-without-landlord.input';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
import { UnitUpdateWithoutLandlordInput } from './unit-update-without-landlord.input';
export declare class UnitUpdateOneRequiredWithoutLandlordNestedInput {
    create?: UnitCreateWithoutLandlordInput;
    connectOrCreate?: UnitCreateOrConnectWithoutLandlordInput;
    upsert?: UnitUpsertWithoutLandlordInput;
    connect?: UnitWhereUniqueInput;
    update?: UnitUpdateWithoutLandlordInput;
}
