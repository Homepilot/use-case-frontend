import { Type } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';

export interface IPaginatedType<T> {
    rows: T[];
    count: number;
}

export function Paginated<T>(classRef: Type<T>): Type<IPaginatedType<T>> {
    @ObjectType({ isAbstract: true })
    abstract class PaginatedType implements IPaginatedType<T> {
        @Field(() => [classRef])
        rows: T[];

        @Field()
        count: number;
    }
    return PaginatedType as Type<IPaginatedType<T>>;
}
