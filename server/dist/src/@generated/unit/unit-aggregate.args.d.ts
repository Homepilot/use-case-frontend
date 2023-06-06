import { UnitWhereInput } from './unit-where.input';
import { UnitOrderByWithRelationInput } from './unit-order-by-with-relation.input';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
import { UnitCountAggregateInput } from './unit-count-aggregate.input';
import { UnitAvgAggregateInput } from './unit-avg-aggregate.input';
import { UnitSumAggregateInput } from './unit-sum-aggregate.input';
import { UnitMinAggregateInput } from './unit-min-aggregate.input';
import { UnitMaxAggregateInput } from './unit-max-aggregate.input';
export declare class UnitAggregateArgs {
    where?: UnitWhereInput;
    orderBy?: Array<UnitOrderByWithRelationInput>;
    cursor?: UnitWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: UnitCountAggregateInput;
    _avg?: UnitAvgAggregateInput;
    _sum?: UnitSumAggregateInput;
    _min?: UnitMinAggregateInput;
    _max?: UnitMaxAggregateInput;
}
