import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Unit } from '../unit/unit.model';
import { LandlordCount } from './landlord-count.output';

@ObjectType()
export class Landlord {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    gender!: string;

    @Field(() => String, {nullable:false})
    first_name!: string;

    @Field(() => String, {nullable:false})
    last_name!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [Unit], {nullable:true})
    Unit?: Array<Unit>;

    @Field(() => LandlordCount, {nullable:false})
    _count?: LandlordCount;
}
