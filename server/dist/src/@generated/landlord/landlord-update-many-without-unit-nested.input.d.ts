import { LandlordCreateWithoutUnitInput } from './landlord-create-without-unit.input';
import { LandlordCreateOrConnectWithoutUnitInput } from './landlord-create-or-connect-without-unit.input';
import { LandlordUpsertWithWhereUniqueWithoutUnitInput } from './landlord-upsert-with-where-unique-without-unit.input';
import { LandlordCreateManyUnitInputEnvelope } from './landlord-create-many-unit-input-envelope.input';
import { LandlordWhereUniqueInput } from './landlord-where-unique.input';
import { LandlordUpdateWithWhereUniqueWithoutUnitInput } from './landlord-update-with-where-unique-without-unit.input';
import { LandlordUpdateManyWithWhereWithoutUnitInput } from './landlord-update-many-with-where-without-unit.input';
import { LandlordScalarWhereInput } from './landlord-scalar-where.input';
export declare class LandlordUpdateManyWithoutUnitNestedInput {
    create?: Array<LandlordCreateWithoutUnitInput>;
    connectOrCreate?: Array<LandlordCreateOrConnectWithoutUnitInput>;
    upsert?: Array<LandlordUpsertWithWhereUniqueWithoutUnitInput>;
    createMany?: LandlordCreateManyUnitInputEnvelope;
    set?: Array<LandlordWhereUniqueInput>;
    disconnect?: Array<LandlordWhereUniqueInput>;
    delete?: Array<LandlordWhereUniqueInput>;
    connect?: Array<LandlordWhereUniqueInput>;
    update?: Array<LandlordUpdateWithWhereUniqueWithoutUnitInput>;
    updateMany?: Array<LandlordUpdateManyWithWhereWithoutUnitInput>;
    deleteMany?: Array<LandlordScalarWhereInput>;
}
