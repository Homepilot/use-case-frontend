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
exports.LandlordCreateNestedManyWithoutUnitInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const landlord_create_without_unit_input_1 = require("./landlord-create-without-unit.input");
const class_transformer_1 = require("class-transformer");
const landlord_create_or_connect_without_unit_input_1 = require("./landlord-create-or-connect-without-unit.input");
const landlord_create_many_unit_input_envelope_input_1 = require("./landlord-create-many-unit-input-envelope.input");
const landlord_where_unique_input_1 = require("./landlord-where-unique.input");
let LandlordCreateNestedManyWithoutUnitInput = class LandlordCreateNestedManyWithoutUnitInput {
};
__decorate([
    (0, graphql_1.Field)(() => [landlord_create_without_unit_input_1.LandlordCreateWithoutUnitInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_create_without_unit_input_1.LandlordCreateWithoutUnitInput),
    __metadata("design:type", Array)
], LandlordCreateNestedManyWithoutUnitInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [landlord_create_or_connect_without_unit_input_1.LandlordCreateOrConnectWithoutUnitInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_create_or_connect_without_unit_input_1.LandlordCreateOrConnectWithoutUnitInput),
    __metadata("design:type", Array)
], LandlordCreateNestedManyWithoutUnitInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_create_many_unit_input_envelope_input_1.LandlordCreateManyUnitInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_create_many_unit_input_envelope_input_1.LandlordCreateManyUnitInputEnvelope),
    __metadata("design:type", landlord_create_many_unit_input_envelope_input_1.LandlordCreateManyUnitInputEnvelope)
], LandlordCreateNestedManyWithoutUnitInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [landlord_where_unique_input_1.LandlordWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_where_unique_input_1.LandlordWhereUniqueInput),
    __metadata("design:type", Array)
], LandlordCreateNestedManyWithoutUnitInput.prototype, "connect", void 0);
LandlordCreateNestedManyWithoutUnitInput = __decorate([
    (0, graphql_2.InputType)()
], LandlordCreateNestedManyWithoutUnitInput);
exports.LandlordCreateNestedManyWithoutUnitInput = LandlordCreateNestedManyWithoutUnitInput;
//# sourceMappingURL=landlord-create-nested-many-without-unit.input.js.map