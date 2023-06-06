import { Landlord } from '../landlord/landlord.model';
export declare class Unit {
    id: number;
    landlord_id: number;
    name: string;
    surface: number;
    furnished: boolean;
    rent_amount: number;
    photo_url: string;
    created_at: Date;
    updated_at: Date;
    landlord?: Landlord;
}
