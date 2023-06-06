import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { LandlordCountOrderByAggregateInput } from './landlord-count-order-by-aggregate.input';
import { LandlordAvgOrderByAggregateInput } from './landlord-avg-order-by-aggregate.input';
import { LandlordMaxOrderByAggregateInput } from './landlord-max-order-by-aggregate.input';
import { LandlordMinOrderByAggregateInput } from './landlord-min-order-by-aggregate.input';
import { LandlordSumOrderByAggregateInput } from './landlord-sum-order-by-aggregate.input';

@InputType()
export class LandlordOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    first_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_name?: keyof typeof SortOrder;

    @HideField()
    created_at?: keyof typeof SortOrder;

    @HideField()
    updated_at?: keyof typeof SortOrder;

    @Field(() => LandlordCountOrderByAggregateInput, {nullable:true})
    _count?: LandlordCountOrderByAggregateInput;

    @Field(() => LandlordAvgOrderByAggregateInput, {nullable:true})
    _avg?: LandlordAvgOrderByAggregateInput;

    @Field(() => LandlordMaxOrderByAggregateInput, {nullable:true})
    _max?: LandlordMaxOrderByAggregateInput;

    @Field(() => LandlordMinOrderByAggregateInput, {nullable:true})
    _min?: LandlordMinOrderByAggregateInput;

    @Field(() => LandlordSumOrderByAggregateInput, {nullable:true})
    _sum?: LandlordSumOrderByAggregateInput;
}
