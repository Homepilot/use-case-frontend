import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
import { Type } from 'class-transformer';
import { UnitUpdateWithoutLandlordInput } from './unit-update-without-landlord.input';
import { UnitCreateWithoutLandlordInput } from './unit-create-without-landlord.input';

@InputType()
export class UnitUpsertWithWhereUniqueWithoutLandlordInput {

    @Field(() => UnitWhereUniqueInput, {nullable:false})
    @Type(() => UnitWhereUniqueInput)
    where!: UnitWhereUniqueInput;

    @Field(() => UnitUpdateWithoutLandlordInput, {nullable:false})
    @Type(() => UnitUpdateWithoutLandlordInput)
    update!: UnitUpdateWithoutLandlordInput;

    @Field(() => UnitCreateWithoutLandlordInput, {nullable:false})
    @Type(() => UnitCreateWithoutLandlordInput)
    create!: UnitCreateWithoutLandlordInput;
}
