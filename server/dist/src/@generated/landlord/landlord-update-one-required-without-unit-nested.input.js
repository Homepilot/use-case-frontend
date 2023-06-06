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
exports.LandlordUpdateOneRequiredWithoutUnitNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const landlord_create_without_unit_input_1 = require("./landlord-create-without-unit.input");
const class_transformer_1 = require("class-transformer");
const landlord_create_or_connect_without_unit_input_1 = require("./landlord-create-or-connect-without-unit.input");
const landlord_upsert_without_unit_input_1 = require("./landlord-upsert-without-unit.input");
const landlord_where_unique_input_1 = require("./landlord-where-unique.input");
const landlord_update_without_unit_input_1 = require("./landlord-update-without-unit.input");
let LandlordUpdateOneRequiredWithoutUnitNestedInput = class LandlordUpdateOneRequiredWithoutUnitNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => landlord_create_without_unit_input_1.LandlordCreateWithoutUnitInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_create_without_unit_input_1.LandlordCreateWithoutUnitInput),
    __metadata("design:type", landlord_create_without_unit_input_1.LandlordCreateWithoutUnitInput)
], LandlordUpdateOneRequiredWithoutUnitNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_create_or_connect_without_unit_input_1.LandlordCreateOrConnectWithoutUnitInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_create_or_connect_without_unit_input_1.LandlordCreateOrConnectWithoutUnitInput),
    __metadata("design:type", landlord_create_or_connect_without_unit_input_1.LandlordCreateOrConnectWithoutUnitInput)
], LandlordUpdateOneRequiredWithoutUnitNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_upsert_without_unit_input_1.LandlordUpsertWithoutUnitInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_upsert_without_unit_input_1.LandlordUpsertWithoutUnitInput),
    __metadata("design:type", landlord_upsert_without_unit_input_1.LandlordUpsertWithoutUnitInput)
], LandlordUpdateOneRequiredWithoutUnitNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_where_unique_input_1.LandlordWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_where_unique_input_1.LandlordWhereUniqueInput),
    __metadata("design:type", landlord_where_unique_input_1.LandlordWhereUniqueInput)
], LandlordUpdateOneRequiredWithoutUnitNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_update_without_unit_input_1.LandlordUpdateWithoutUnitInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_update_without_unit_input_1.LandlordUpdateWithoutUnitInput),
    __metadata("design:type", landlord_update_without_unit_input_1.LandlordUpdateWithoutUnitInput)
], LandlordUpdateOneRequiredWithoutUnitNestedInput.prototype, "update", void 0);
LandlordUpdateOneRequiredWithoutUnitNestedInput = __decorate([
    (0, graphql_2.InputType)()
], LandlordUpdateOneRequiredWithoutUnitNestedInput);
exports.LandlordUpdateOneRequiredWithoutUnitNestedInput = LandlordUpdateOneRequiredWithoutUnitNestedInput;
//# sourceMappingURL=landlord-update-one-required-without-unit-nested.input.js.map