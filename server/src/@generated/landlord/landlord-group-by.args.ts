import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LandlordWhereInput } from './landlord-where.input';
import { Type } from 'class-transformer';
import { LandlordOrderByWithAggregationInput } from './landlord-order-by-with-aggregation.input';
import { LandlordScalarFieldEnum } from './landlord-scalar-field.enum';
import { LandlordScalarWhereWithAggregatesInput } from './landlord-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LandlordCountAggregateInput } from './landlord-count-aggregate.input';
import { LandlordAvgAggregateInput } from './landlord-avg-aggregate.input';
import { LandlordSumAggregateInput } from './landlord-sum-aggregate.input';
import { LandlordMinAggregateInput } from './landlord-min-aggregate.input';
import { LandlordMaxAggregateInput } from './landlord-max-aggregate.input';

@ArgsType()
export class LandlordGroupByArgs {

    @Field(() => LandlordWhereInput, {nullable:true})
    @Type(() => LandlordWhereInput)
    where?: LandlordWhereInput;

    @Field(() => [LandlordOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LandlordOrderByWithAggregationInput>;

    @Field(() => [LandlordScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LandlordScalarFieldEnum>;

    @Field(() => LandlordScalarWhereWithAggregatesInput, {nullable:true})
    having?: LandlordScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LandlordCountAggregateInput, {nullable:true})
    _count?: LandlordCountAggregateInput;

    @Field(() => LandlordAvgAggregateInput, {nullable:true})
    _avg?: LandlordAvgAggregateInput;

    @Field(() => LandlordSumAggregateInput, {nullable:true})
    _sum?: LandlordSumAggregateInput;

    @Field(() => LandlordMinAggregateInput, {nullable:true})
    _min?: LandlordMinAggregateInput;

    @Field(() => LandlordMaxAggregateInput, {nullable:true})
    _max?: LandlordMaxAggregateInput;
}
