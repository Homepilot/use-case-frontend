import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UnitUpdateInput {
    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => Int, { nullable: true })
    surface?: number;

    @Field(() => Boolean, { nullable: true })
    furnished?: boolean;

    @Field(() => Int, { nullable: true })
    rent_amount?: number;

    @Field(() => String, { nullable: true })
    photo_url?: string;

    @Field(() => Int, { nullable: true })
    landlord_id?: number;
}
