import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LandlordUpdateWithoutUnitInput } from './landlord-update-without-unit.input';
import { Type } from 'class-transformer';
import { LandlordCreateWithoutUnitInput } from './landlord-create-without-unit.input';

@InputType()
export class LandlordUpsertWithoutUnitInput {

    @Field(() => LandlordUpdateWithoutUnitInput, {nullable:false})
    @Type(() => LandlordUpdateWithoutUnitInput)
    update!: LandlordUpdateWithoutUnitInput;

    @Field(() => LandlordCreateWithoutUnitInput, {nullable:false})
    @Type(() => LandlordCreateWithoutUnitInput)
    create!: LandlordCreateWithoutUnitInput;
}
