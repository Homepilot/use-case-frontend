import { UnitCreateWithoutLandlordInput } from './unit-create-without-landlord.input';
import { UnitCreateOrConnectWithoutLandlordInput } from './unit-create-or-connect-without-landlord.input';
import { UnitCreateManyLandlordInputEnvelope } from './unit-create-many-landlord-input-envelope.input';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
export declare class UnitCreateNestedManyWithoutLandlordInput {
    create?: Array<UnitCreateWithoutLandlordInput>;
    connectOrCreate?: Array<UnitCreateOrConnectWithoutLandlordInput>;
    createMany?: UnitCreateManyLandlordInputEnvelope;
    connect?: Array<UnitWhereUniqueInput>;
}
