import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Unit {
    @Field(() => ID, { nullable: false })
    id!: number;

    @Field(() => ID, { nullable: false })
    landlord_id!: number;

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

    @Field(() => Date, { nullable: false })
    created_at!: Date;

    @Field(() => Date, { nullable: false })
    updated_at!: Date;
}
