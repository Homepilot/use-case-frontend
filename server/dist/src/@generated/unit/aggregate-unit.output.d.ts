import { UnitCountAggregate } from './unit-count-aggregate.output';
import { UnitAvgAggregate } from './unit-avg-aggregate.output';
import { UnitSumAggregate } from './unit-sum-aggregate.output';
import { UnitMinAggregate } from './unit-min-aggregate.output';
import { UnitMaxAggregate } from './unit-max-aggregate.output';
export declare class AggregateUnit {
    _count?: UnitCountAggregate;
    _avg?: UnitAvgAggregate;
    _sum?: UnitSumAggregate;
    _min?: UnitMinAggregate;
    _max?: UnitMaxAggregate;
}
