import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LandlordWhereInput } from './landlord-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyLandlordArgs {

    @Field(() => LandlordWhereInput, {nullable:true})
    @Type(() => LandlordWhereInput)
    where?: LandlordWhereInput;
}
