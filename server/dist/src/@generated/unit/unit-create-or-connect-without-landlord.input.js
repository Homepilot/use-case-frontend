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
exports.UnitCreateOrConnectWithoutLandlordInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const unit_where_unique_input_1 = require("./unit-where-unique.input");
const class_transformer_1 = require("class-transformer");
const unit_create_without_landlord_input_1 = require("./unit-create-without-landlord.input");
let UnitCreateOrConnectWithoutLandlordInput = class UnitCreateOrConnectWithoutLandlordInput {
};
__decorate([
    (0, graphql_1.Field)(() => unit_where_unique_input_1.UnitWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => unit_where_unique_input_1.UnitWhereUniqueInput),
    __metadata("design:type", unit_where_unique_input_1.UnitWhereUniqueInput)
], UnitCreateOrConnectWithoutLandlordInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_create_without_landlord_input_1.UnitCreateWithoutLandlordInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => unit_create_without_landlord_input_1.UnitCreateWithoutLandlordInput),
    __metadata("design:type", unit_create_without_landlord_input_1.UnitCreateWithoutLandlordInput)
], UnitCreateOrConnectWithoutLandlordInput.prototype, "create", void 0);
UnitCreateOrConnectWithoutLandlordInput = __decorate([
    (0, graphql_2.InputType)()
], UnitCreateOrConnectWithoutLandlordInput);
exports.UnitCreateOrConnectWithoutLandlordInput = UnitCreateOrConnectWithoutLandlordInput;
//# sourceMappingURL=unit-create-or-connect-without-landlord.input.js.map