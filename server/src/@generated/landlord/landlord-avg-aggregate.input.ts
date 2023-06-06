import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LandlordAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
