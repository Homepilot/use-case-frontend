import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UnitUncheckedCreateNestedManyWithoutLandlordInput } from '../unit/unit-unchecked-create-nested-many-without-landlord.input';

@InputType()
export class LandlordUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    gender!: string;

    @Field(() => String, {nullable:false})
    first_name!: string;

    @Field(() => String, {nullable:false})
    last_name!: string;

    @HideField()
    created_at?: Date | string;

    @HideField()
    updated_at?: Date | string;

    @HideField()
    Unit?: UnitUncheckedCreateNestedManyWithoutLandlordInput;
}
