import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class LandlordUpdateManyMutationInput {
    gender?: StringFieldUpdateOperationsInput;
    first_name?: StringFieldUpdateOperationsInput;
    last_name?: StringFieldUpdateOperationsInput;
    created_at?: DateTimeFieldUpdateOperationsInput;
    updated_at?: DateTimeFieldUpdateOperationsInput;
}
