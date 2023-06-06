import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LandlordUpdateManyMutationInput } from './landlord-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LandlordWhereInput } from './landlord-where.input';

@ArgsType()
export class UpdateManyLandlordArgs {

    @Field(() => LandlordUpdateManyMutationInput, {nullable:false})
    @Type(() => LandlordUpdateManyMutationInput)
    data!: LandlordUpdateManyMutationInput;

    @Field(() => LandlordWhereInput, {nullable:true})
    @Type(() => LandlordWhereInput)
    where?: LandlordWhereInput;
}
