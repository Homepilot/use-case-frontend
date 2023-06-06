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
exports.LandlordOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const landlord_count_order_by_aggregate_input_1 = require("./landlord-count-order-by-aggregate.input");
const landlord_avg_order_by_aggregate_input_1 = require("./landlord-avg-order-by-aggregate.input");
const landlord_max_order_by_aggregate_input_1 = require("./landlord-max-order-by-aggregate.input");
const landlord_min_order_by_aggregate_input_1 = require("./landlord-min-order-by-aggregate.input");
const landlord_sum_order_by_aggregate_input_1 = require("./landlord-sum-order-by-aggregate.input");
let LandlordOrderByWithAggregationInput = class LandlordOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LandlordOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LandlordOrderByWithAggregationInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LandlordOrderByWithAggregationInput.prototype, "first_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LandlordOrderByWithAggregationInput.prototype, "last_name", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LandlordOrderByWithAggregationInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LandlordOrderByWithAggregationInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_count_order_by_aggregate_input_1.LandlordCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_count_order_by_aggregate_input_1.LandlordCountOrderByAggregateInput)
], LandlordOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_avg_order_by_aggregate_input_1.LandlordAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_avg_order_by_aggregate_input_1.LandlordAvgOrderByAggregateInput)
], LandlordOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_max_order_by_aggregate_input_1.LandlordMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_max_order_by_aggregate_input_1.LandlordMaxOrderByAggregateInput)
], LandlordOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_min_order_by_aggregate_input_1.LandlordMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_min_order_by_aggregate_input_1.LandlordMinOrderByAggregateInput)
], LandlordOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_sum_order_by_aggregate_input_1.LandlordSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_sum_order_by_aggregate_input_1.LandlordSumOrderByAggregateInput)
], LandlordOrderByWithAggregationInput.prototype, "_sum", void 0);
LandlordOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], LandlordOrderByWithAggregationInput);
exports.LandlordOrderByWithAggregationInput = LandlordOrderByWithAggregationInput;
//# sourceMappingURL=landlord-order-by-with-aggregation.input.js.map