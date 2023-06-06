import { LandlordCountAggregate } from './landlord-count-aggregate.output';
import { LandlordAvgAggregate } from './landlord-avg-aggregate.output';
import { LandlordSumAggregate } from './landlord-sum-aggregate.output';
import { LandlordMinAggregate } from './landlord-min-aggregate.output';
import { LandlordMaxAggregate } from './landlord-max-aggregate.output';
export declare class LandlordGroupBy {
    id: number;
    gender: string;
    first_name: string;
    last_name: string;
    created_at: Date | string;
    updated_at: Date | string;
    _count?: LandlordCountAggregate;
    _avg?: LandlordAvgAggregate;
    _sum?: LandlordSumAggregate;
    _min?: LandlordMinAggregate;
    _max?: LandlordMaxAggregate;
}
