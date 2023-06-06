import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LandlordCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    gender?: true;

    @Field(() => Boolean, {nullable:true})
    first_name?: true;

    @Field(() => Boolean, {nullable:true})
    last_name?: true;

    @HideField()
    created_at?: true;

    @HideField()
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
