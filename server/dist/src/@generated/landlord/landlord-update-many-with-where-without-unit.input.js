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
exports.LandlordUpdateManyWithWhereWithoutUnitInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const landlord_scalar_where_input_1 = require("./landlord-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const landlord_update_many_mutation_input_1 = require("./landlord-update-many-mutation.input");
let LandlordUpdateManyWithWhereWithoutUnitInput = class LandlordUpdateManyWithWhereWithoutUnitInput {
};
__decorate([
    (0, graphql_1.Field)(() => landlord_scalar_where_input_1.LandlordScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => landlord_scalar_where_input_1.LandlordScalarWhereInput),
    __metadata("design:type", landlord_scalar_where_input_1.LandlordScalarWhereInput)
], LandlordUpdateManyWithWhereWithoutUnitInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_update_many_mutation_input_1.LandlordUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => landlord_update_many_mutation_input_1.LandlordUpdateManyMutationInput),
    __metadata("design:type", landlord_update_many_mutation_input_1.LandlordUpdateManyMutationInput)
], LandlordUpdateManyWithWhereWithoutUnitInput.prototype, "data", void 0);
LandlordUpdateManyWithWhereWithoutUnitInput = __decorate([
    (0, graphql_2.InputType)()
], LandlordUpdateManyWithWhereWithoutUnitInput);
exports.LandlordUpdateManyWithWhereWithoutUnitInput = LandlordUpdateManyWithWhereWithoutUnitInput;
//# sourceMappingURL=landlord-update-many-with-where-without-unit.input.js.map