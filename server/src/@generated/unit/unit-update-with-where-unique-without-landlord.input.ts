import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
import { Type } from 'class-transformer';
import { UnitUpdateWithoutLandlordInput } from './unit-update-without-landlord.input';

@InputType()
export class UnitUpdateWithWhereUniqueWithoutLandlordInput {

    @Field(() => UnitWhereUniqueInput, {nullable:false})
    @Type(() => UnitWhereUniqueInput)
    where!: UnitWhereUniqueInput;

    @Field(() => UnitUpdateWithoutLandlordInput, {nullable:false})
    @Type(() => UnitUpdateWithoutLandlordInput)
    data!: UnitUpdateWithoutLandlordInput;
}
