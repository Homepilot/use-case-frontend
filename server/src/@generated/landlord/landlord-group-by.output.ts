import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LandlordCountAggregate } from './landlord-count-aggregate.output';
import { LandlordAvgAggregate } from './landlord-avg-aggregate.output';
import { LandlordSumAggregate } from './landlord-sum-aggregate.output';
import { LandlordMinAggregate } from './landlord-min-aggregate.output';
import { LandlordMaxAggregate } from './landlord-max-aggregate.output';

@ObjectType()
export class LandlordGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    gender!: string;

    @Field(() => String, {nullable:false})
    first_name!: string;

    @Field(() => String, {nullable:false})
    last_name!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => LandlordCountAggregate, {nullable:true})
    _count?: LandlordCountAggregate;

    @Field(() => LandlordAvgAggregate, {nullable:true})
    _avg?: LandlordAvgAggregate;

    @Field(() => LandlordSumAggregate, {nullable:true})
    _sum?: LandlordSumAggregate;

    @Field(() => LandlordMinAggregate, {nullable:true})
    _min?: LandlordMinAggregate;

    @Field(() => LandlordMaxAggregate, {nullable:true})
    _max?: LandlordMaxAggregate;
}
