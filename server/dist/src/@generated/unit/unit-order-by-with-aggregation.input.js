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
exports.UnitOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const unit_count_order_by_aggregate_input_1 = require("./unit-count-order-by-aggregate.input");
const unit_avg_order_by_aggregate_input_1 = require("./unit-avg-order-by-aggregate.input");
const unit_max_order_by_aggregate_input_1 = require("./unit-max-order-by-aggregate.input");
const unit_min_order_by_aggregate_input_1 = require("./unit-min-order-by-aggregate.input");
const unit_sum_order_by_aggregate_input_1 = require("./unit-sum-order-by-aggregate.input");
let UnitOrderByWithAggregationInput = class UnitOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UnitOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UnitOrderByWithAggregationInput.prototype, "landlord_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UnitOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UnitOrderByWithAggregationInput.prototype, "surface", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UnitOrderByWithAggregationInput.prototype, "furnished", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UnitOrderByWithAggregationInput.prototype, "rent_amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UnitOrderByWithAggregationInput.prototype, "photo_url", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], UnitOrderByWithAggregationInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], UnitOrderByWithAggregationInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_count_order_by_aggregate_input_1.UnitCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", unit_count_order_by_aggregate_input_1.UnitCountOrderByAggregateInput)
], UnitOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_avg_order_by_aggregate_input_1.UnitAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", unit_avg_order_by_aggregate_input_1.UnitAvgOrderByAggregateInput)
], UnitOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_max_order_by_aggregate_input_1.UnitMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", unit_max_order_by_aggregate_input_1.UnitMaxOrderByAggregateInput)
], UnitOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_min_order_by_aggregate_input_1.UnitMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", unit_min_order_by_aggregate_input_1.UnitMinOrderByAggregateInput)
], UnitOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_sum_order_by_aggregate_input_1.UnitSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", unit_sum_order_by_aggregate_input_1.UnitSumOrderByAggregateInput)
], UnitOrderByWithAggregationInput.prototype, "_sum", void 0);
UnitOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], UnitOrderByWithAggregationInput);
exports.UnitOrderByWithAggregationInput = UnitOrderByWithAggregationInput;
//# sourceMappingURL=unit-order-by-with-aggregation.input.js.map