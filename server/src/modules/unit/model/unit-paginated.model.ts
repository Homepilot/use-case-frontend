import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/utils/graphql/type/pagination.type';
import { Unit } from '../graphql/type/unit.type';

@ObjectType()
export class UnitPaginated extends Paginated(Unit) {}
