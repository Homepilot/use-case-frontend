import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Landlord } from '../landlord/landlord.model';

@ObjectType()
export class Unit {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    landlord_id!: number;

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

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Landlord, {nullable:false})
    landlord?: Landlord;
}
