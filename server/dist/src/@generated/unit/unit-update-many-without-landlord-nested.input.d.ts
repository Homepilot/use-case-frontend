import { UnitCreateWithoutLandlordInput } from './unit-create-without-landlord.input';
import { UnitCreateOrConnectWithoutLandlordInput } from './unit-create-or-connect-without-landlord.input';
import { UnitUpsertWithWhereUniqueWithoutLandlordInput } from './unit-upsert-with-where-unique-without-landlord.input';
import { UnitCreateManyLandlordInputEnvelope } from './unit-create-many-landlord-input-envelope.input';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
import { UnitUpdateWithWhereUniqueWithoutLandlordInput } from './unit-update-with-where-unique-without-landlord.input';
import { UnitUpdateManyWithWhereWithoutLandlordInput } from './unit-update-many-with-where-without-landlord.input';
import { UnitScalarWhereInput } from './unit-scalar-where.input';
export declare class UnitUpdateManyWithoutLandlordNestedInput {
    create?: Array<UnitCreateWithoutLandlordInput>;
    connectOrCreate?: Array<UnitCreateOrConnectWithoutLandlordInput>;
    upsert?: Array<UnitUpsertWithWhereUniqueWithoutLandlordInput>;
    createMany?: UnitCreateManyLandlordInputEnvelope;
    set?: Array<UnitWhereUniqueInput>;
    disconnect?: Array<UnitWhereUniqueInput>;
    delete?: Array<UnitWhereUniqueInput>;
    connect?: Array<UnitWhereUniqueInput>;
    update?: Array<UnitUpdateWithWhereUniqueWithoutLandlordInput>;
    updateMany?: Array<UnitUpdateManyWithWhereWithoutLandlordInput>;
    deleteMany?: Array<UnitScalarWhereInput>;
}
