import { LandlordCountAggregate } from './landlord-count-aggregate.output';
import { LandlordAvgAggregate } from './landlord-avg-aggregate.output';
import { LandlordSumAggregate } from './landlord-sum-aggregate.output';
import { LandlordMinAggregate } from './landlord-min-aggregate.output';
import { LandlordMaxAggregate } from './landlord-max-aggregate.output';
export declare class AggregateLandlord {
    _count?: LandlordCountAggregate;
    _avg?: LandlordAvgAggregate;
    _sum?: LandlordSumAggregate;
    _min?: LandlordMinAggregate;
    _max?: LandlordMaxAggregate;
}
