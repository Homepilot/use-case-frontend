import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UnitCreateManyLandlordInput } from './unit-create-many-landlord.input';
import { Type } from 'class-transformer';

@InputType()
export class UnitCreateManyLandlordInputEnvelope {

    @Field(() => [UnitCreateManyLandlordInput], {nullable:false})
    @Type(() => UnitCreateManyLandlordInput)
    data!: Array<UnitCreateManyLandlordInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
