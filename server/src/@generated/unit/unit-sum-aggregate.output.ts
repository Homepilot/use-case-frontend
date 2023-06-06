import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UnitSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    landlord_id?: number;

    @Field(() => Int, {nullable:true})
    surface?: number;

    @Field(() => Int, {nullable:true})
    rent_amount?: number;
}
