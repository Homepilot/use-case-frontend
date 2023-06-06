import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class LandlordWhereInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: true })
    first_name?: string;

    @Field(() => String, { nullable: true })
    last_name?: string;

    @Field(() => String, { nullable: true })
    email?: string;

    @Field(() => String, { nullable: true })
    phone?: string;
}
