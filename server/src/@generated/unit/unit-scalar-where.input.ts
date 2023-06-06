import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UnitScalarWhereInput {

    @Field(() => [UnitScalarWhereInput], {nullable:true})
    AND?: Array<UnitScalarWhereInput>;

    @Field(() => [UnitScalarWhereInput], {nullable:true})
    OR?: Array<UnitScalarWhereInput>;

    @Field(() => [UnitScalarWhereInput], {nullable:true})
    NOT?: Array<UnitScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    landlord_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    surface?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    furnished?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    rent_amount?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    photo_url?: StringFilter;

    @HideField()
    created_at?: DateTimeFilter;

    @HideField()
    updated_at?: DateTimeFilter;
}
