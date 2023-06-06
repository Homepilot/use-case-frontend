import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { LandlordOrderByWithRelationInput } from '../landlord/landlord-order-by-with-relation.input';

@InputType()
export class UnitOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    landlord_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    surface?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    furnished?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rent_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    photo_url?: keyof typeof SortOrder;

    @HideField()
    created_at?: keyof typeof SortOrder;

    @HideField()
    updated_at?: keyof typeof SortOrder;

    @Field(() => LandlordOrderByWithRelationInput, {nullable:true})
    landlord?: LandlordOrderByWithRelationInput;
}
