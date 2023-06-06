"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandlordUpdateManyWithoutUnitNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const landlord_create_without_unit_input_1 = require("./landlord-create-without-unit.input");
const class_transformer_1 = require("class-transformer");
const landlord_create_or_connect_without_unit_input_1 = require("./landlord-create-or-connect-without-unit.input");
const landlord_upsert_with_where_unique_without_unit_input_1 = require("./landlord-upsert-with-where-unique-without-unit.input");
const landlord_create_many_unit_input_envelope_input_1 = require("./landlord-create-many-unit-input-envelope.input");
const landlord_where_unique_input_1 = require("./landlord-where-unique.input");
const landlord_update_with_where_unique_without_unit_input_1 = require("./landlord-update-with-where-unique-without-unit.input");
const landlord_update_many_with_where_without_unit_input_1 = require("./landlord-update-many-with-where-without-unit.input");
const landlord_scalar_where_input_1 = require("./landlord-scalar-where.input");
let LandlordUpdateManyWithoutUnitNestedInput = class LandlordUpdateManyWithoutUnitNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [landlord_create_without_unit_input_1.LandlordCreateWithoutUnitInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_create_without_unit_input_1.LandlordCreateWithoutUnitInput),
    __metadata("design:type", Array)
], LandlordUpdateManyWithoutUnitNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [landlord_create_or_connect_without_unit_input_1.LandlordCreateOrConnectWithoutUnitInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_create_or_connect_without_unit_input_1.LandlordCreateOrConnectWithoutUnitInput),
    __metadata("design:type", Array)
], LandlordUpdateManyWithoutUnitNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [landlord_upsert_with_where_unique_without_unit_input_1.LandlordUpsertWithWhereUniqueWithoutUnitInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_upsert_with_where_unique_without_unit_input_1.LandlordUpsertWithWhereUniqueWithoutUnitInput),
    __metadata("design:type", Array)
], LandlordUpdateManyWithoutUnitNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_create_many_unit_input_envelope_input_1.LandlordCreateManyUnitInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_create_many_unit_input_envelope_input_1.LandlordCreateManyUnitInputEnvelope),
    __metadata("design:type", landlord_create_many_unit_input_envelope_input_1.LandlordCreateManyUnitInputEnvelope)
], LandlordUpdateManyWithoutUnitNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [landlord_where_unique_input_1.LandlordWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_where_unique_input_1.LandlordWhereUniqueInput),
    __metadata("design:type", Array)
], LandlordUpdateManyWithoutUnitNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [landlord_where_unique_input_1.LandlordWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_where_unique_input_1.LandlordWhereUniqueInput),
    __metadata("design:type", Array)
], LandlordUpdateManyWithoutUnitNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [landlord_where_unique_input_1.LandlordWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_where_unique_input_1.LandlordWhereUniqueInput),
    __metadata("design:type", Array)
], LandlordUpdateManyWithoutUnitNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [landlord_where_unique_input_1.LandlordWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_where_unique_input_1.LandlordWhereUniqueInput),
    __metadata("design:type", Array)
], LandlordUpdateManyWithoutUnitNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [landlord_update_with_where_unique_without_unit_input_1.LandlordUpdateWithWhereUniqueWithoutUnitInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_update_with_where_unique_without_unit_input_1.LandlordUpdateWithWhereUniqueWithoutUnitInput),
    __metadata("design:type", Array)
], LandlordUpdateManyWithoutUnitNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [landlord_update_many_with_where_without_unit_input_1.LandlordUpdateManyWithWhereWithoutUnitInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_update_many_with_where_without_unit_input_1.LandlordUpdateManyWithWhereWithoutUnitInput),
    __metadata("design:type", Array)
], LandlordUpdateManyWithoutUnitNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [landlord_scalar_where_input_1.LandlordScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_scalar_where_input_1.LandlordScalarWhereInput),
    __metadata("design:type", Array)
], LandlordUpdateManyWithoutUnitNestedInput.prototype, "deleteMany", void 0);
LandlordUpdateManyWithoutUnitNestedInput = __decorate([
    (0, graphql_2.InputType)()
], LandlordUpdateManyWithoutUnitNestedInput);
exports.LandlordUpdateManyWithoutUnitNestedInput = LandlordUpdateManyWithoutUnitNestedInput;
//# sourceMappingURL=landlord-update-many-without-unit-nested.input.js.map