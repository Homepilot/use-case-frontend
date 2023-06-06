import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnitWhereUniqueInput } from './unit-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUnitArgs {

    @Field(() => UnitWhereUniqueInput, {nullable:false})
    @Type(() => UnitWhereUniqueInput)
    where!: UnitWhereUniqueInput;
}
