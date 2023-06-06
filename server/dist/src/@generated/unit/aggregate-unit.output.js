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
exports.AggregateUnit = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const unit_count_aggregate_output_1 = require("./unit-count-aggregate.output");
const unit_avg_aggregate_output_1 = require("./unit-avg-aggregate.output");
const unit_sum_aggregate_output_1 = require("./unit-sum-aggregate.output");
const unit_min_aggregate_output_1 = require("./unit-min-aggregate.output");
const unit_max_aggregate_output_1 = require("./unit-max-aggregate.output");
let AggregateUnit = class AggregateUnit {
};
__decorate([
    (0, graphql_1.Field)(() => unit_count_aggregate_output_1.UnitCountAggregate, { nullable: true }),
    __metadata("design:type", unit_count_aggregate_output_1.UnitCountAggregate)
], AggregateUnit.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_avg_aggregate_output_1.UnitAvgAggregate, { nullable: true }),
    __metadata("design:type", unit_avg_aggregate_output_1.UnitAvgAggregate)
], AggregateUnit.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_sum_aggregate_output_1.UnitSumAggregate, { nullable: true }),
    __metadata("design:type", unit_sum_aggregate_output_1.UnitSumAggregate)
], AggregateUnit.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_min_aggregate_output_1.UnitMinAggregate, { nullable: true }),
    __metadata("design:type", unit_min_aggregate_output_1.UnitMinAggregate)
], AggregateUnit.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_max_aggregate_output_1.UnitMaxAggregate, { nullable: true }),
    __metadata("design:type", unit_max_aggregate_output_1.UnitMaxAggregate)
], AggregateUnit.prototype, "_max", void 0);
AggregateUnit = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateUnit);
exports.AggregateUnit = AggregateUnit;
//# sourceMappingURL=aggregate-unit.output.js.map