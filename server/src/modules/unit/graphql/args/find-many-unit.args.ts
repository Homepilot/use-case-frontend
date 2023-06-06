import { ArgsType } from '@nestjs/graphql';
import { UnitWhereInput } from '../input/unit-where.input';

@ArgsType()
export class FindManyUnitArgs {
    where?: UnitWhereInput;

    take?: number;

    skip?: number;
}
