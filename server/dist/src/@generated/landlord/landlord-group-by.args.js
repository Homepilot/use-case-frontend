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
exports.LandlordGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const landlord_where_input_1 = require("./landlord-where.input");
const class_transformer_1 = require("class-transformer");
const landlord_order_by_with_aggregation_input_1 = require("./landlord-order-by-with-aggregation.input");
const landlord_scalar_field_enum_1 = require("./landlord-scalar-field.enum");
const landlord_scalar_where_with_aggregates_input_1 = require("./landlord-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const landlord_count_aggregate_input_1 = require("./landlord-count-aggregate.input");
const landlord_avg_aggregate_input_1 = require("./landlord-avg-aggregate.input");
const landlord_sum_aggregate_input_1 = require("./landlord-sum-aggregate.input");
const landlord_min_aggregate_input_1 = require("./landlord-min-aggregate.input");
const landlord_max_aggregate_input_1 = require("./landlord-max-aggregate.input");
let LandlordGroupByArgs = class LandlordGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => landlord_where_input_1.LandlordWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_where_input_1.LandlordWhereInput),
    __metadata("design:type", landlord_where_input_1.LandlordWhereInput)
], LandlordGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [landlord_order_by_with_aggregation_input_1.LandlordOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], LandlordGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [landlord_scalar_field_enum_1.LandlordScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], LandlordGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_scalar_where_with_aggregates_input_1.LandlordScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", landlord_scalar_where_with_aggregates_input_1.LandlordScalarWhereWithAggregatesInput)
], LandlordGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LandlordGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LandlordGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_count_aggregate_input_1.LandlordCountAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_count_aggregate_input_1.LandlordCountAggregateInput)
], LandlordGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_avg_aggregate_input_1.LandlordAvgAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_avg_aggregate_input_1.LandlordAvgAggregateInput)
], LandlordGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_sum_aggregate_input_1.LandlordSumAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_sum_aggregate_input_1.LandlordSumAggregateInput)
], LandlordGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_min_aggregate_input_1.LandlordMinAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_min_aggregate_input_1.LandlordMinAggregateInput)
], LandlordGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_max_aggregate_input_1.LandlordMaxAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_max_aggregate_input_1.LandlordMaxAggregateInput)
], LandlordGroupByArgs.prototype, "_max", void 0);
LandlordGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], LandlordGroupByArgs);
exports.LandlordGroupByArgs = LandlordGroupByArgs;
//# sourceMappingURL=landlord-group-by.args.js.map