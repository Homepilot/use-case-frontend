import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LandlordWhereUniqueInput } from './landlord-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneLandlordArgs {

    @Field(() => LandlordWhereUniqueInput, {nullable:false})
    @Type(() => LandlordWhereUniqueInput)
    where!: LandlordWhereUniqueInput;
}
