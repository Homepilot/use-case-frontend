import { UnitCountAggregate } from './unit-count-aggregate.output';
import { UnitAvgAggregate } from './unit-avg-aggregate.output';
import { UnitSumAggregate } from './unit-sum-aggregate.output';
import { UnitMinAggregate } from './unit-min-aggregate.output';
import { UnitMaxAggregate } from './unit-max-aggregate.output';
export declare class UnitGroupBy {
    id: number;
    landlord_id: number;
    name: string;
    surface: number;
    furnished: boolean;
    rent_amount: number;
    photo_url: string;
    created_at: Date | string;
    updated_at: Date | string;
    _count?: UnitCountAggregate;
    _avg?: UnitAvgAggregate;
    _sum?: UnitSumAggregate;
    _min?: UnitMinAggregate;
    _max?: UnitMaxAggregate;
}
