import { Landlord } from 'src/@generated/landlord/landlord.model';
import { LandlordService } from './landlord.service';
import { FindManyLandlordArgs } from 'src/@generated/landlord/find-many-landlord.args';
export declare class LandlordResolver {
    private readonly landlordService;
    constructor(landlordService: LandlordService);
    landlords(params: FindManyLandlordArgs): Promise<{
        rows: import(".prisma/client").Landlord[];
        count: number;
    }>;
    displayName(landlord: Landlord): string;
}
