import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/utils/graphql/type/pagination.type';
import { Landlord } from '../graphql/type/landlord.type';

@ObjectType()
export class LandlordPaginated extends Paginated(Landlord) {}
