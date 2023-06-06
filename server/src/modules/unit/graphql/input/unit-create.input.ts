import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UnitCreateInput {
    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => Int, { nullable: false })
    surface!: number;

    @Field(() => Boolean, { nullable: false })
    furnished!: boolean;

    @Field(() => Int, { nullable: false })
    rent_amount!: number;

    @Field(() => String, { nullable: false })
    photo_url!: string;

    @Field(() => Int, { nullable: false })
    landlord_id!: number;
}
