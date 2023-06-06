import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LandlordCountAggregate } from './landlord-count-aggregate.output';
import { LandlordAvgAggregate } from './landlord-avg-aggregate.output';
import { LandlordSumAggregate } from './landlord-sum-aggregate.output';
import { LandlordMinAggregate } from './landlord-min-aggregate.output';
import { LandlordMaxAggregate } from './landlord-max-aggregate.output';

@ObjectType()
export class AggregateLandlord {

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
