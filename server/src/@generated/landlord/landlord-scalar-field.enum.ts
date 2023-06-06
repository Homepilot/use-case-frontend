import { registerEnumType } from '@nestjs/graphql';

export enum LandlordScalarFieldEnum {
    id = "id",
    gender = "gender",
    first_name = "first_name",
    last_name = "last_name",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(LandlordScalarFieldEnum, { name: 'LandlordScalarFieldEnum', description: undefined })
