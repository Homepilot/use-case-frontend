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
exports.LandlordCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const unit_create_nested_many_without_landlord_input_1 = require("../unit/unit-create-nested-many-without-landlord.input");
let LandlordCreateInput = class LandlordCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LandlordCreateInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LandlordCreateInput.prototype, "first_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LandlordCreateInput.prototype, "last_name", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LandlordCreateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LandlordCreateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", unit_create_nested_many_without_landlord_input_1.UnitCreateNestedManyWithoutLandlordInput)
], LandlordCreateInput.prototype, "Unit", void 0);
LandlordCreateInput = __decorate([
    (0, graphql_2.InputType)()
], LandlordCreateInput);
exports.LandlordCreateInput = LandlordCreateInput;
//# sourceMappingURL=landlord-create.input.js.map