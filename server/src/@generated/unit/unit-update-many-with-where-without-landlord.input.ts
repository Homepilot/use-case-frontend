import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UnitScalarWhereInput } from './unit-scalar-where.input';
import { Type } from 'class-transformer';
import { UnitUpdateManyMutationInput } from './unit-update-many-mutation.input';

@InputType()
export class UnitUpdateManyWithWhereWithoutLandlordInput {

    @Field(() => UnitScalarWhereInput, {nullable:false})
    @Type(() => UnitScalarWhereInput)
    where!: UnitScalarWhereInput;

    @Field(() => UnitUpdateManyMutationInput, {nullable:false})
    @Type(() => UnitUpdateManyMutationInput)
    data!: UnitUpdateManyMutationInput;
}
