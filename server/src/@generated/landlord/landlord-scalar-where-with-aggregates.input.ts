import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LandlordScalarWhereWithAggregatesInput {

    @Field(() => [LandlordScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LandlordScalarWhereWithAggregatesInput>;

    @Field(() => [LandlordScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LandlordScalarWhereWithAggregatesInput>;

    @Field(() => [LandlordScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LandlordScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    gender?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    first_name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    last_name?: StringWithAggregatesFilter;

    @HideField()
    created_at?: DateTimeWithAggregatesFilter;

    @HideField()
    updated_at?: DateTimeWithAggregatesFilter;
}
