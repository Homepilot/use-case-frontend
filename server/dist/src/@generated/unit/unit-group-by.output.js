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
exports.UnitGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const unit_count_aggregate_output_1 = require("./unit-count-aggregate.output");
const unit_avg_aggregate_output_1 = require("./unit-avg-aggregate.output");
const unit_sum_aggregate_output_1 = require("./unit-sum-aggregate.output");
const unit_min_aggregate_output_1 = require("./unit-min-aggregate.output");
const unit_max_aggregate_output_1 = require("./unit-max-aggregate.output");
let UnitGroupBy = class UnitGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], UnitGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], UnitGroupBy.prototype, "landlord_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UnitGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], UnitGroupBy.prototype, "surface", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false }),
    __metadata("design:type", Boolean)
], UnitGroupBy.prototype, "furnished", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], UnitGroupBy.prototype, "rent_amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UnitGroupBy.prototype, "photo_url", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], UnitGroupBy.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], UnitGroupBy.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_count_aggregate_output_1.UnitCountAggregate, { nullable: true }),
    __metadata("design:type", unit_count_aggregate_output_1.UnitCountAggregate)
], UnitGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_avg_aggregate_output_1.UnitAvgAggregate, { nullable: true }),
    __metadata("design:type", unit_avg_aggregate_output_1.UnitAvgAggregate)
], UnitGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_sum_aggregate_output_1.UnitSumAggregate, { nullable: true }),
    __metadata("design:type", unit_sum_aggregate_output_1.UnitSumAggregate)
], UnitGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_min_aggregate_output_1.UnitMinAggregate, { nullable: true }),
    __metadata("design:type", unit_min_aggregate_output_1.UnitMinAggregate)
], UnitGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_max_aggregate_output_1.UnitMaxAggregate, { nullable: true }),
    __metadata("design:type", unit_max_aggregate_output_1.UnitMaxAggregate)
], UnitGroupBy.prototype, "_max", void 0);
UnitGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], UnitGroupBy);
exports.UnitGroupBy = UnitGroupBy;
//# sourceMappingURL=unit-group-by.output.js.map