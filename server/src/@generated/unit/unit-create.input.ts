import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { LandlordCreateNestedOneWithoutUnitInput } from '../landlord/landlord-create-nested-one-without-unit.input';

@InputType()
export class UnitCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    surface!: number;

    @Field(() => Boolean, {nullable:false})
    furnished!: boolean;

    @Field(() => Int, {nullable:false})
    rent_amount!: number;

    @Field(() => String, {nullable:false})
    photo_url!: string;

    @HideField()
    created_at?: Date | string;

    @HideField()
    updated_at?: Date | string;

    @Field(() => LandlordCreateNestedOneWithoutUnitInput, {nullable:false})
    landlord!: LandlordCreateNestedOneWithoutUnitInput;
}
