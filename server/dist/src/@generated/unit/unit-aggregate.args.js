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
exports.UnitAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const unit_where_input_1 = require("./unit-where.input");
const class_transformer_1 = require("class-transformer");
const unit_order_by_with_relation_input_1 = require("./unit-order-by-with-relation.input");
const unit_where_unique_input_1 = require("./unit-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const unit_count_aggregate_input_1 = require("./unit-count-aggregate.input");
const unit_avg_aggregate_input_1 = require("./unit-avg-aggregate.input");
const unit_sum_aggregate_input_1 = require("./unit-sum-aggregate.input");
const unit_min_aggregate_input_1 = require("./unit-min-aggregate.input");
const unit_max_aggregate_input_1 = require("./unit-max-aggregate.input");
let UnitAggregateArgs = class UnitAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => unit_where_input_1.UnitWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => unit_where_input_1.UnitWhereInput),
    __metadata("design:type", unit_where_input_1.UnitWhereInput)
], UnitAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [unit_order_by_with_relation_input_1.UnitOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], UnitAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_where_unique_input_1.UnitWhereUniqueInput, { nullable: true }),
    __metadata("design:type", unit_where_unique_input_1.UnitWhereUniqueInput)
], UnitAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], UnitAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], UnitAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_count_aggregate_input_1.UnitCountAggregateInput, { nullable: true }),
    __metadata("design:type", unit_count_aggregate_input_1.UnitCountAggregateInput)
], UnitAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_avg_aggregate_input_1.UnitAvgAggregateInput, { nullable: true }),
    __metadata("design:type", unit_avg_aggregate_input_1.UnitAvgAggregateInput)
], UnitAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_sum_aggregate_input_1.UnitSumAggregateInput, { nullable: true }),
    __metadata("design:type", unit_sum_aggregate_input_1.UnitSumAggregateInput)
], UnitAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_min_aggregate_input_1.UnitMinAggregateInput, { nullable: true }),
    __metadata("design:type", unit_min_aggregate_input_1.UnitMinAggregateInput)
], UnitAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_max_aggregate_input_1.UnitMaxAggregateInput, { nullable: true }),
    __metadata("design:type", unit_max_aggregate_input_1.UnitMaxAggregateInput)
], UnitAggregateArgs.prototype, "_max", void 0);
UnitAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UnitAggregateArgs);
exports.UnitAggregateArgs = UnitAggregateArgs;
//# sourceMappingURL=unit-aggregate.args.js.map