import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UnitCreateWithoutLandlordInput {

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
}
