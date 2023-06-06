import { UnitWhereInput } from './unit-where.input';
import { UnitOrderByWithAggregationInput } from './unit-order-by-with-aggregation.input';
import { UnitScalarFieldEnum } from './unit-scalar-field.enum';
import { UnitScalarWhereWithAggregatesInput } from './unit-scalar-where-with-aggregates.input';
import { UnitCountAggregateInput } from './unit-count-aggregate.input';
import { UnitAvgAggregateInput } from './unit-avg-aggregate.input';
import { UnitSumAggregateInput } from './unit-sum-aggregate.input';
import { UnitMinAggregateInput } from './unit-min-aggregate.input';
import { UnitMaxAggregateInput } from './unit-max-aggregate.input';
export declare class UnitGroupByArgs {
    where?: UnitWhereInput;
    orderBy?: Array<UnitOrderByWithAggregationInput>;
    by: Array<keyof typeof UnitScalarFieldEnum>;
    having?: UnitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UnitCountAggregateInput;
    _avg?: UnitAvgAggregateInput;
    _sum?: UnitSumAggregateInput;
    _min?: UnitMinAggregateInput;
    _max?: UnitMaxAggregateInput;
}
