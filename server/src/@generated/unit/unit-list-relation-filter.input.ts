import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UnitWhereInput } from './unit-where.input';

@InputType()
export class UnitListRelationFilter {

    @Field(() => UnitWhereInput, {nullable:true})
    every?: UnitWhereInput;

    @Field(() => UnitWhereInput, {nullable:true})
    some?: UnitWhereInput;

    @Field(() => UnitWhereInput, {nullable:true})
    none?: UnitWhereInput;
}
