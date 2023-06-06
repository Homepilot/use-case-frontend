import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UnitCreateWithoutLandlordInput } from './unit-create-without-landlord.input';
import { Type } from 'class-transformer';
import { UnitCreateOrConnectWithoutLandlordInput } from './unit-create-or-connect-without-landlord.input';
import { UnitCreateManyLandlordInputEnvelope } from './unit-create-many-landlord-input-envelope.input';
import { UnitWhereUniqueInput } from './unit-where-unique.input';

@InputType()
export class UnitUncheckedCreateNestedManyWithoutLandlordInput {

    @Field(() => [UnitCreateWithoutLandlordInput], {nullable:true})
    @Type(() => UnitCreateWithoutLandlordInput)
    create?: Array<UnitCreateWithoutLandlordInput>;

    @Field(() => [UnitCreateOrConnectWithoutLandlordInput], {nullable:true})
    @Type(() => UnitCreateOrConnectWithoutLandlordInput)
    connectOrCreate?: Array<UnitCreateOrConnectWithoutLandlordInput>;

    @Field(() => UnitCreateManyLandlordInputEnvelope, {nullable:true})
    @Type(() => UnitCreateManyLandlordInputEnvelope)
    createMany?: UnitCreateManyLandlordInputEnvelope;

    @Field(() => [UnitWhereUniqueInput], {nullable:true})
    @Type(() => UnitWhereUniqueInput)
    connect?: Array<UnitWhereUniqueInput>;
}
