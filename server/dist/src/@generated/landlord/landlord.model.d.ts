import { Unit } from '../unit/unit.model';
import { LandlordCount } from './landlord-count.output';
export declare class Landlord {
    id: number;
    gender: string;
    first_name: string;
    last_name: string;
    created_at: Date;
    updated_at: Date;
    Unit?: Array<Unit>;
    _count?: LandlordCount;
}
