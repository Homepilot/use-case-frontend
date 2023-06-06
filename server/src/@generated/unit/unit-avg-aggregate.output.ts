import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UnitAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    landlord_id?: number;

    @Field(() => Float, {nullable:true})
    surface?: number;

    @Field(() => Float, {nullable:true})
    rent_amount?: number;
}
