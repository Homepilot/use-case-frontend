import { LandlordCreateWithoutUnitInput } from './landlord-create-without-unit.input';
import { LandlordCreateOrConnectWithoutUnitInput } from './landlord-create-or-connect-without-unit.input';
import { LandlordCreateManyUnitInputEnvelope } from './landlord-create-many-unit-input-envelope.input';
import { LandlordWhereUniqueInput } from './landlord-where-unique.input';
export declare class LandlordCreateNestedManyWithoutUnitInput {
    create?: Array<LandlordCreateWithoutUnitInput>;
    connectOrCreate?: Array<LandlordCreateOrConnectWithoutUnitInput>;
    createMany?: LandlordCreateManyUnitInputEnvelope;
    connect?: Array<LandlordWhereUniqueInput>;
}
