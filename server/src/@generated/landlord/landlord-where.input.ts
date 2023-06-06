import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { UnitListRelationFilter } from '../unit/unit-list-relation-filter.input';

@InputType()
export class LandlordWhereInput {

    @Field(() => [LandlordWhereInput], {nullable:true})
    AND?: Array<LandlordWhereInput>;

    @Field(() => [LandlordWhereInput], {nullable:true})
    OR?: Array<LandlordWhereInput>;

    @Field(() => [LandlordWhereInput], {nullable:true})
    NOT?: Array<LandlordWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    gender?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    first_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    last_name?: StringFilter;

    @HideField()
    created_at?: DateTimeFilter;

    @HideField()
    updated_at?: DateTimeFilter;

    @HideField()
    Unit?: UnitListRelationFilter;
}
