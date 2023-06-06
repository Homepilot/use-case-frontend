import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { LandlordPaginated } from './model/landlord-paginated.model';
import { LandlordService } from './landlord.service';
import { FindManyLandlordArgs } from './graphql/args/find-many-landlord.args';
import { Landlord } from './graphql/type/landlord.type';

@Resolver(Landlord)
export class LandlordResolver {
    constructor(private readonly landlordService: LandlordService) {}

    @Query(() => LandlordPaginated)
    landlords(@Args() params: FindManyLandlordArgs) {
        return this.landlordService.findManyPaginated(params);
    }

    @ResolveField('display_name', () => String, { nullable: true })
    displayName(@Parent() landlord: Landlord) {
        return this.landlordService.getDisplayName(landlord);
    }
}
