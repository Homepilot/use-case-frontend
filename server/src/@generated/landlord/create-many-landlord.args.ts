import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LandlordCreateManyInput } from './landlord-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLandlordArgs {

    @Field(() => [LandlordCreateManyInput], {nullable:false})
    @Type(() => LandlordCreateManyInput)
    data!: Array<LandlordCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
