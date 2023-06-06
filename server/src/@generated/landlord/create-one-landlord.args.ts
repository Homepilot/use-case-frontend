import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LandlordCreateInput } from './landlord-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLandlordArgs {

    @Field(() => LandlordCreateInput, {nullable:false})
    @Type(() => LandlordCreateInput)
    data!: LandlordCreateInput;
}
