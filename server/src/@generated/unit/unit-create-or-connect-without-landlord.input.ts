import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
import { Type } from 'class-transformer';
import { UnitCreateWithoutLandlordInput } from './unit-create-without-landlord.input';

@InputType()
export class UnitCreateOrConnectWithoutLandlordInput {

    @Field(() => UnitWhereUniqueInput, {nullable:false})
    @Type(() => UnitWhereUniqueInput)
    where!: UnitWhereUniqueInput;

    @Field(() => UnitCreateWithoutLandlordInput, {nullable:false})
    @Type(() => UnitCreateWithoutLandlordInput)
    create!: UnitCreateWithoutLandlordInput;
}
