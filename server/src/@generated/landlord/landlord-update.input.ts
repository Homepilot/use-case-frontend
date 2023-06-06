import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { UnitUpdateManyWithoutLandlordNestedInput } from '../unit/unit-update-many-without-landlord-nested.input';

@InputType()
export class LandlordUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    gender?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    first_name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    last_name?: StringFieldUpdateOperationsInput;

    @HideField()
    created_at?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    Unit?: UnitUpdateManyWithoutLandlordNestedInput;
}
