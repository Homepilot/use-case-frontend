import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UnitCreateWithoutLandlordInput } from './unit-create-without-landlord.input';
import { Type } from 'class-transformer';
import { UnitCreateOrConnectWithoutLandlordInput } from './unit-create-or-connect-without-landlord.input';
import { UnitUpsertWithWhereUniqueWithoutLandlordInput } from './unit-upsert-with-where-unique-without-landlord.input';
import { UnitCreateManyLandlordInputEnvelope } from './unit-create-many-landlord-input-envelope.input';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
import { UnitUpdateWithWhereUniqueWithoutLandlordInput } from './unit-update-with-where-unique-without-landlord.input';
import { UnitUpdateManyWithWhereWithoutLandlordInput } from './unit-update-many-with-where-without-landlord.input';
import { UnitScalarWhereInput } from './unit-scalar-where.input';

@InputType()
export class UnitUpdateManyWithoutLandlordNestedInput {

    @Field(() => [UnitCreateWithoutLandlordInput], {nullable:true})
    @Type(() => UnitCreateWithoutLandlordInput)
    create?: Array<UnitCreateWithoutLandlordInput>;

    @Field(() => [UnitCreateOrConnectWithoutLandlordInput], {nullable:true})
    @Type(() => UnitCreateOrConnectWithoutLandlordInput)
    connectOrCreate?: Array<UnitCreateOrConnectWithoutLandlordInput>;

    @Field(() => [UnitUpsertWithWhereUniqueWithoutLandlordInput], {nullable:true})
    @Type(() => UnitUpsertWithWhereUniqueWithoutLandlordInput)
    upsert?: Array<UnitUpsertWithWhereUniqueWithoutLandlordInput>;

    @Field(() => UnitCreateManyLandlordInputEnvelope, {nullable:true})
    @Type(() => UnitCreateManyLandlordInputEnvelope)
    createMany?: UnitCreateManyLandlordInputEnvelope;

    @Field(() => [UnitWhereUniqueInput], {nullable:true})
    @Type(() => UnitWhereUniqueInput)
    set?: Array<UnitWhereUniqueInput>;

    @Field(() => [UnitWhereUniqueInput], {nullable:true})
    @Type(() => UnitWhereUniqueInput)
    disconnect?: Array<UnitWhereUniqueInput>;

    @Field(() => [UnitWhereUniqueInput], {nullable:true})
    @Type(() => UnitWhereUniqueInput)
    delete?: Array<UnitWhereUniqueInput>;

    @Field(() => [UnitWhereUniqueInput], {nullable:true})
    @Type(() => UnitWhereUniqueInput)
    connect?: Array<UnitWhereUniqueInput>;

    @Field(() => [UnitUpdateWithWhereUniqueWithoutLandlordInput], {nullable:true})
    @Type(() => UnitUpdateWithWhereUniqueWithoutLandlordInput)
    update?: Array<UnitUpdateWithWhereUniqueWithoutLandlordInput>;

    @Field(() => [UnitUpdateManyWithWhereWithoutLandlordInput], {nullable:true})
    @Type(() => UnitUpdateManyWithWhereWithoutLandlordInput)
    updateMany?: Array<UnitUpdateManyWithWhereWithoutLandlordInput>;

    @Field(() => [UnitScalarWhereInput], {nullable:true})
    @Type(() => UnitScalarWhereInput)
    deleteMany?: Array<UnitScalarWhereInput>;
}
