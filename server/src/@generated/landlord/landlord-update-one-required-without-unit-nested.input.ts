import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LandlordCreateWithoutUnitInput } from './landlord-create-without-unit.input';
import { Type } from 'class-transformer';
import { LandlordCreateOrConnectWithoutUnitInput } from './landlord-create-or-connect-without-unit.input';
import { LandlordUpsertWithoutUnitInput } from './landlord-upsert-without-unit.input';
import { LandlordWhereUniqueInput } from './landlord-where-unique.input';
import { LandlordUpdateWithoutUnitInput } from './landlord-update-without-unit.input';

@InputType()
export class LandlordUpdateOneRequiredWithoutUnitNestedInput {

    @Field(() => LandlordCreateWithoutUnitInput, {nullable:true})
    @Type(() => LandlordCreateWithoutUnitInput)
    create?: LandlordCreateWithoutUnitInput;

    @Field(() => LandlordCreateOrConnectWithoutUnitInput, {nullable:true})
    @Type(() => LandlordCreateOrConnectWithoutUnitInput)
    connectOrCreate?: LandlordCreateOrConnectWithoutUnitInput;

    @Field(() => LandlordUpsertWithoutUnitInput, {nullable:true})
    @Type(() => LandlordUpsertWithoutUnitInput)
    upsert?: LandlordUpsertWithoutUnitInput;

    @Field(() => LandlordWhereUniqueInput, {nullable:true})
    @Type(() => LandlordWhereUniqueInput)
    connect?: LandlordWhereUniqueInput;

    @Field(() => LandlordUpdateWithoutUnitInput, {nullable:true})
    @Type(() => LandlordUpdateWithoutUnitInput)
    update?: LandlordUpdateWithoutUnitInput;
}
