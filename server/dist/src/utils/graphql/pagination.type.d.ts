import { Type } from '@nestjs/common';
export interface IPaginatedType<T> {
    rows: T[];
    count: number;
}
export declare function Paginated<T>(classRef: Type<T>): Type<IPaginatedType<T>>;
