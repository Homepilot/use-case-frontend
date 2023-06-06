import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LandlordWhereInput } from './landlord-where.input';
import { Type } from 'class-transformer';
import { LandlordOrderByWithRelationInput } from './landlord-order-by-with-relation.input';
import { LandlordWhereUniqueInput } from './landlord-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LandlordScalarFieldEnum } from './landlord-scalar-field.enum';

@ArgsType()
export class FindFirstLandlordArgs {

    @Field(() => LandlordWhereInput, {nullable:true})
    @Type(() => LandlordWhereInput)
    where?: LandlordWhereInput;

    @Field(() => [LandlordOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LandlordOrderByWithRelationInput>;

    @Field(() => LandlordWhereUniqueInput, {nullable:true})
    cursor?: LandlordWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LandlordScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LandlordScalarFieldEnum>;
}
