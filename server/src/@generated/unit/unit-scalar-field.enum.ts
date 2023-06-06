import { registerEnumType } from '@nestjs/graphql';

export enum UnitScalarFieldEnum {
    id = "id",
    landlord_id = "landlord_id",
    name = "name",
    surface = "surface",
    furnished = "furnished",
    rent_amount = "rent_amount",
    photo_url = "photo_url",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(UnitScalarFieldEnum, { name: 'UnitScalarFieldEnum', description: undefined })
