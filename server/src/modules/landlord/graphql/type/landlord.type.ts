import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Landlord {
    @Field(() => ID, { nullable: false })
    id!: number;

    @Field(() => String, { nullable: false })
    gender!: string;

    @Field(() => String, { nullable: false })
    first_name!: string;

    @Field(() => String, { nullable: false })
    last_name!: string;

    @Field(() => Date, { nullable: false })
    created_at!: Date;

    @Field(() => Date, { nullable: false })
    updated_at!: Date;

    // @Field(() => [Unit], {nullable:true})
    // Unit?: Array<Unit>;
}
