import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LandlordWhereUniqueInput } from './landlord-where-unique.input';
import { Type } from 'class-transformer';
import { LandlordCreateInput } from './landlord-create.input';
import { LandlordUpdateInput } from './landlord-update.input';

@ArgsType()
export class UpsertOneLandlordArgs {

    @Field(() => LandlordWhereUniqueInput, {nullable:false})
    @Type(() => LandlordWhereUniqueInput)
    where!: LandlordWhereUniqueInput;

    @Field(() => LandlordCreateInput, {nullable:false})
    @Type(() => LandlordCreateInput)
    create!: LandlordCreateInput;

    @Field(() => LandlordUpdateInput, {nullable:false})
    @Type(() => LandlordUpdateInput)
    update!: LandlordUpdateInput;
}
