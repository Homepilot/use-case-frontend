import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LandlordWhereInput } from './landlord-where.input';

@InputType()
export class LandlordRelationFilter {

    @Field(() => LandlordWhereInput, {nullable:true})
    is?: LandlordWhereInput;

    @Field(() => LandlordWhereInput, {nullable:true})
    isNot?: LandlordWhereInput;
}
