import { LandlordWhereInput } from './landlord-where.input';
import { LandlordOrderByWithRelationInput } from './landlord-order-by-with-relation.input';
import { LandlordWhereUniqueInput } from './landlord-where-unique.input';
import { LandlordCountAggregateInput } from './landlord-count-aggregate.input';
import { LandlordAvgAggregateInput } from './landlord-avg-aggregate.input';
import { LandlordSumAggregateInput } from './landlord-sum-aggregate.input';
import { LandlordMinAggregateInput } from './landlord-min-aggregate.input';
import { LandlordMaxAggregateInput } from './landlord-max-aggregate.input';
export declare class LandlordAggregateArgs {
    where?: LandlordWhereInput;
    orderBy?: Array<LandlordOrderByWithRelationInput>;
    cursor?: LandlordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: LandlordCountAggregateInput;
    _avg?: LandlordAvgAggregateInput;
    _sum?: LandlordSumAggregateInput;
    _min?: LandlordMinAggregateInput;
    _max?: LandlordMaxAggregateInput;
}
