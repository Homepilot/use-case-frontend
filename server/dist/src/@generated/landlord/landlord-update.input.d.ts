import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UnitUpdateManyWithoutLandlordNestedInput } from '../unit/unit-update-many-without-landlord-nested.input';
export declare class LandlordUpdateInput {
    gender?: StringFieldUpdateOperationsInput;
    first_name?: StringFieldUpdateOperationsInput;
    last_name?: StringFieldUpdateOperationsInput;
    created_at?: DateTimeFieldUpdateOperationsInput;
    updated_at?: DateTimeFieldUpdateOperationsInput;
    Unit?: UnitUpdateManyWithoutLandlordNestedInput;
}
