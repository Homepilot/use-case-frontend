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
exports.UnitCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const landlord_create_nested_one_without_unit_input_1 = require("../landlord/landlord-create-nested-one-without-unit.input");
let UnitCreateInput = class UnitCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UnitCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], UnitCreateInput.prototype, "surface", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false }),
    __metadata("design:type", Boolean)
], UnitCreateInput.prototype, "furnished", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], UnitCreateInput.prototype, "rent_amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UnitCreateInput.prototype, "photo_url", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Object)
], UnitCreateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Object)
], UnitCreateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_create_nested_one_without_unit_input_1.LandlordCreateNestedOneWithoutUnitInput, { nullable: false }),
    __metadata("design:type", landlord_create_nested_one_without_unit_input_1.LandlordCreateNestedOneWithoutUnitInput)
], UnitCreateInput.prototype, "landlord", void 0);
UnitCreateInput = __decorate([
    (0, graphql_2.InputType)()
], UnitCreateInput);
exports.UnitCreateInput = UnitCreateInput;
//# sourceMappingURL=unit-create.input.js.map