import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql';
import { UnitService } from './unit.service';
import { LandlordService } from '../landlord/landlord.service';
import { UnitPaginated } from './model/unit-paginated.model';
import { Unit } from './graphql/type/unit.type';
import { FindManyUnitArgs } from './graphql/args/find-many-unit.args';
import { Landlord } from '../landlord/graphql/type/landlord.type';
import { UnitCreateInput } from './graphql/input/unit-create.input';
import { UnitUpdateInput } from './graphql/input/unit-update.input';

@Resolver(Unit)
export class UnitResolver {
    constructor(
        private readonly unitService: UnitService,
        private readonly landlordService: LandlordService,
    ) {}

    @Query(() => UnitPaginated)
    units(@Args() params: FindManyUnitArgs) {
        return this.unitService.findManyPaginated(params);
    }

    @ResolveField(() => Landlord)
    landlord(@Parent() unit: Unit) {
        const { landlord_id } = unit;

        return this.landlordService.findUniqueWithID(landlord_id);
    }

    @Mutation(() => Unit)
    createUnit(@Args('data') data: UnitCreateInput) {
        return this.unitService.create(data);
    }

    @Mutation(() => Unit)
    updateUnit(@Args('id') id: number, @Args('data') data: UnitUpdateInput) {
        return this.unitService.update(id, data);
    }

    @Mutation(() => Unit)
    deleteUnit(@Args('id') id: number) {
        return this.unitService.delete(id);
    }
}
