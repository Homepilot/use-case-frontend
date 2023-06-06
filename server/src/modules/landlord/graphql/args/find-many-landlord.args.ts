import { ArgsType, Field, Int } from '@nestjs/graphql';
import { LandlordWhereInput } from '../input/landlord-where.input';

@ArgsType()
export class FindManyLandlordArgs {
    @Field(() => LandlordWhereInput, { nullable: true })
    where?: LandlordWhereInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;
}
