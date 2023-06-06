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
exports.LandlordOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const unit_order_by_relation_aggregate_input_1 = require("../unit/unit-order-by-relation-aggregate.input");
let LandlordOrderByWithRelationInput = class LandlordOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LandlordOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LandlordOrderByWithRelationInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LandlordOrderByWithRelationInput.prototype, "first_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LandlordOrderByWithRelationInput.prototype, "last_name", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LandlordOrderByWithRelationInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LandlordOrderByWithRelationInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", unit_order_by_relation_aggregate_input_1.UnitOrderByRelationAggregateInput)
], LandlordOrderByWithRelationInput.prototype, "Unit", void 0);
LandlordOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], LandlordOrderByWithRelationInput);
exports.LandlordOrderByWithRelationInput = LandlordOrderByWithRelationInput;
//# sourceMappingURL=landlord-order-by-with-relation.input.js.map