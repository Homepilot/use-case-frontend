import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class UnitUpdateManyMutationInput {
    name?: StringFieldUpdateOperationsInput;
    surface?: IntFieldUpdateOperationsInput;
    furnished?: BoolFieldUpdateOperationsInput;
    rent_amount?: IntFieldUpdateOperationsInput;
    photo_url?: StringFieldUpdateOperationsInput;
    created_at?: DateTimeFieldUpdateOperationsInput;
    updated_at?: DateTimeFieldUpdateOperationsInput;
}
