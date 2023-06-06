import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UnitSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    landlord_id?: true;

    @Field(() => Boolean, {nullable:true})
    surface?: true;

    @Field(() => Boolean, {nullable:true})
    rent_amount?: true;
}
