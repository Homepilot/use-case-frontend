import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { LandlordRelationFilter } from '../landlord/landlord-relation-filter.input';

@InputType()
export class UnitWhereInput {

    @Field(() => [UnitWhereInput], {nullable:true})
    AND?: Array<UnitWhereInput>;

    @Field(() => [UnitWhereInput], {nullable:true})
    OR?: Array<UnitWhereInput>;

    @Field(() => [UnitWhereInput], {nullable:true})
    NOT?: Array<UnitWhereInput>;

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

    @Field(() => LandlordRelationFilter, {nullable:true})
    landlord?: LandlordRelationFilter;
}
