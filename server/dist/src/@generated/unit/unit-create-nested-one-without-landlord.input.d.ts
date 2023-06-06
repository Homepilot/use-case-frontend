import { UnitCreateWithoutLandlordInput } from './unit-create-without-landlord.input';
import { UnitCreateOrConnectWithoutLandlordInput } from './unit-create-or-connect-without-landlord.input';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
export declare class UnitCreateNestedOneWithoutLandlordInput {
    create?: UnitCreateWithoutLandlordInput;
    connectOrCreate?: UnitCreateOrConnectWithoutLandlordInput;
    connect?: UnitWhereUniqueInput;
}
