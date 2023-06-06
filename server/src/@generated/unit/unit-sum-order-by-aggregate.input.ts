import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UnitSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    landlord_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    surface?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rent_amount?: keyof typeof SortOrder;
}
