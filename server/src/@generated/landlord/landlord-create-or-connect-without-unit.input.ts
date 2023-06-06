import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LandlordWhereUniqueInput } from './landlord-where-unique.input';
import { Type } from 'class-transformer';
import { LandlordCreateWithoutUnitInput } from './landlord-create-without-unit.input';

@InputType()
export class LandlordCreateOrConnectWithoutUnitInput {

    @Field(() => LandlordWhereUniqueInput, {nullable:false})
    @Type(() => LandlordWhereUniqueInput)
    where!: LandlordWhereUniqueInput;

    @Field(() => LandlordCreateWithoutUnitInput, {nullable:false})
    @Type(() => LandlordCreateWithoutUnitInput)
    create!: LandlordCreateWithoutUnitInput;
}
