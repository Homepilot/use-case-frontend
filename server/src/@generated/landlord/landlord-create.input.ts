import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UnitCreateNestedManyWithoutLandlordInput } from '../unit/unit-create-nested-many-without-landlord.input';

@InputType()
export class LandlordCreateInput {

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
    Unit?: UnitCreateNestedManyWithoutLandlordInput;
}
