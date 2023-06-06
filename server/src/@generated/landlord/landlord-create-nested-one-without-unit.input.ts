import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LandlordCreateWithoutUnitInput } from './landlord-create-without-unit.input';
import { Type } from 'class-transformer';
import { LandlordCreateOrConnectWithoutUnitInput } from './landlord-create-or-connect-without-unit.input';
import { LandlordWhereUniqueInput } from './landlord-where-unique.input';

@InputType()
export class LandlordCreateNestedOneWithoutUnitInput {

    @Field(() => LandlordCreateWithoutUnitInput, {nullable:true})
    @Type(() => LandlordCreateWithoutUnitInput)
    create?: LandlordCreateWithoutUnitInput;

    @Field(() => LandlordCreateOrConnectWithoutUnitInput, {nullable:true})
    @Type(() => LandlordCreateOrConnectWithoutUnitInput)
    connectOrCreate?: LandlordCreateOrConnectWithoutUnitInput;

    @Field(() => LandlordWhereUniqueInput, {nullable:true})
    @Type(() => LandlordWhereUniqueInput)
    connect?: LandlordWhereUniqueInput;
}
