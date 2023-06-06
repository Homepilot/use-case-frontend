import { LandlordWhereInput } from './landlord-where.input';
import { LandlordOrderByWithRelationInput } from './landlord-order-by-with-relation.input';
import { LandlordWhereUniqueInput } from './landlord-where-unique.input';
import { LandlordScalarFieldEnum } from './landlord-scalar-field.enum';
export declare class FindFirstLandlordOrThrowArgs {
    where?: LandlordWhereInput;
    orderBy?: Array<LandlordOrderByWithRelationInput>;
    cursor?: LandlordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof LandlordScalarFieldEnum>;
}
