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
exports.UnitUpdateManyWithoutLandlordNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const unit_create_without_landlord_input_1 = require("./unit-create-without-landlord.input");
const class_transformer_1 = require("class-transformer");
const unit_create_or_connect_without_landlord_input_1 = require("./unit-create-or-connect-without-landlord.input");
const unit_upsert_with_where_unique_without_landlord_input_1 = require("./unit-upsert-with-where-unique-without-landlord.input");
const unit_create_many_landlord_input_envelope_input_1 = require("./unit-create-many-landlord-input-envelope.input");
const unit_where_unique_input_1 = require("./unit-where-unique.input");
const unit_update_with_where_unique_without_landlord_input_1 = require("./unit-update-with-where-unique-without-landlord.input");
const unit_update_many_with_where_without_landlord_input_1 = require("./unit-update-many-with-where-without-landlord.input");
const unit_scalar_where_input_1 = require("./unit-scalar-where.input");
let UnitUpdateManyWithoutLandlordNestedInput = class UnitUpdateManyWithoutLandlordNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [unit_create_without_landlord_input_1.UnitCreateWithoutLandlordInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => unit_create_without_landlord_input_1.UnitCreateWithoutLandlordInput),
    __metadata("design:type", Array)
], UnitUpdateManyWithoutLandlordNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [unit_create_or_connect_without_landlord_input_1.UnitCreateOrConnectWithoutLandlordInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => unit_create_or_connect_without_landlord_input_1.UnitCreateOrConnectWithoutLandlordInput),
    __metadata("design:type", Array)
], UnitUpdateManyWithoutLandlordNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [unit_upsert_with_where_unique_without_landlord_input_1.UnitUpsertWithWhereUniqueWithoutLandlordInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => unit_upsert_with_where_unique_without_landlord_input_1.UnitUpsertWithWhereUniqueWithoutLandlordInput),
    __metadata("design:type", Array)
], UnitUpdateManyWithoutLandlordNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_create_many_landlord_input_envelope_input_1.UnitCreateManyLandlordInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => unit_create_many_landlord_input_envelope_input_1.UnitCreateManyLandlordInputEnvelope),
    __metadata("design:type", unit_create_many_landlord_input_envelope_input_1.UnitCreateManyLandlordInputEnvelope)
], UnitUpdateManyWithoutLandlordNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [unit_where_unique_input_1.UnitWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => unit_where_unique_input_1.UnitWhereUniqueInput),
    __metadata("design:type", Array)
], UnitUpdateManyWithoutLandlordNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [unit_where_unique_input_1.UnitWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => unit_where_unique_input_1.UnitWhereUniqueInput),
    __metadata("design:type", Array)
], UnitUpdateManyWithoutLandlordNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [unit_where_unique_input_1.UnitWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => unit_where_unique_input_1.UnitWhereUniqueInput),
    __metadata("design:type", Array)
], UnitUpdateManyWithoutLandlordNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [unit_where_unique_input_1.UnitWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => unit_where_unique_input_1.UnitWhereUniqueInput),
    __metadata("design:type", Array)
], UnitUpdateManyWithoutLandlordNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [unit_update_with_where_unique_without_landlord_input_1.UnitUpdateWithWhereUniqueWithoutLandlordInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => unit_update_with_where_unique_without_landlord_input_1.UnitUpdateWithWhereUniqueWithoutLandlordInput),
    __metadata("design:type", Array)
], UnitUpdateManyWithoutLandlordNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [unit_update_many_with_where_without_landlord_input_1.UnitUpdateManyWithWhereWithoutLandlordInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => unit_update_many_with_where_without_landlord_input_1.UnitUpdateManyWithWhereWithoutLandlordInput),
    __metadata("design:type", Array)
], UnitUpdateManyWithoutLandlordNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [unit_scalar_where_input_1.UnitScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => unit_scalar_where_input_1.UnitScalarWhereInput),
    __metadata("design:type", Array)
], UnitUpdateManyWithoutLandlordNestedInput.prototype, "deleteMany", void 0);
UnitUpdateManyWithoutLandlordNestedInput = __decorate([
    (0, graphql_2.InputType)()
], UnitUpdateManyWithoutLandlordNestedInput);
exports.UnitUpdateManyWithoutLandlordNestedInput = UnitUpdateManyWithoutLandlordNestedInput;
//# sourceMappingURL=unit-update-many-without-landlord-nested.input.js.map