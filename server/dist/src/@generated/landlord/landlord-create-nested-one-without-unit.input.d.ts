import { LandlordCreateWithoutUnitInput } from './landlord-create-without-unit.input';
import { LandlordCreateOrConnectWithoutUnitInput } from './landlord-create-or-connect-without-unit.input';
import { LandlordWhereUniqueInput } from './landlord-where-unique.input';
export declare class LandlordCreateNestedOneWithoutUnitInput {
    create?: LandlordCreateWithoutUnitInput;
    connectOrCreate?: LandlordCreateOrConnectWithoutUnitInput;
    connect?: LandlordWhereUniqueInput;
}
