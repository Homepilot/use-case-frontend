import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UnitMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    landlord_id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    surface?: true;

    @Field(() => Boolean, {nullable:true})
    furnished?: true;

    @Field(() => Boolean, {nullable:true})
    rent_amount?: true;

    @Field(() => Boolean, {nullable:true})
    photo_url?: true;

    @HideField()
    created_at?: true;

    @HideField()
    updated_at?: true;
}
