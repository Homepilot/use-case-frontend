import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LandlordUpdateInput } from './landlord-update.input';
import { Type } from 'class-transformer';
import { LandlordWhereUniqueInput } from './landlord-where-unique.input';

@ArgsType()
export class UpdateOneLandlordArgs {

    @Field(() => LandlordUpdateInput, {nullable:false})
    @Type(() => LandlordUpdateInput)
    data!: LandlordUpdateInput;

    @Field(() => LandlordWhereUniqueInput, {nullable:false})
    @Type(() => LandlordWhereUniqueInput)
    where!: LandlordWhereUniqueInput;
}
