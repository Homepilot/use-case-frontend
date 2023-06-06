import { LandlordWhereInput } from './landlord-where.input';
import { LandlordOrderByWithAggregationInput } from './landlord-order-by-with-aggregation.input';
import { LandlordScalarFieldEnum } from './landlord-scalar-field.enum';
import { LandlordScalarWhereWithAggregatesInput } from './landlord-scalar-where-with-aggregates.input';
import { LandlordCountAggregateInput } from './landlord-count-aggregate.input';
import { LandlordAvgAggregateInput } from './landlord-avg-aggregate.input';
import { LandlordSumAggregateInput } from './landlord-sum-aggregate.input';
import { LandlordMinAggregateInput } from './landlord-min-aggregate.input';
import { LandlordMaxAggregateInput } from './landlord-max-aggregate.input';
export declare class LandlordGroupByArgs {
    where?: LandlordWhereInput;
    orderBy?: Array<LandlordOrderByWithAggregationInput>;
    by: Array<keyof typeof LandlordScalarFieldEnum>;
    having?: LandlordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LandlordCountAggregateInput;
    _avg?: LandlordAvgAggregateInput;
    _sum?: LandlordSumAggregateInput;
    _min?: LandlordMinAggregateInput;
    _max?: LandlordMaxAggregateInput;
}
