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
exports.LandlordGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const landlord_count_aggregate_output_1 = require("./landlord-count-aggregate.output");
const landlord_avg_aggregate_output_1 = require("./landlord-avg-aggregate.output");
const landlord_sum_aggregate_output_1 = require("./landlord-sum-aggregate.output");
const landlord_min_aggregate_output_1 = require("./landlord-min-aggregate.output");
const landlord_max_aggregate_output_1 = require("./landlord-max-aggregate.output");
let LandlordGroupBy = class LandlordGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], LandlordGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LandlordGroupBy.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LandlordGroupBy.prototype, "first_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LandlordGroupBy.prototype, "last_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], LandlordGroupBy.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], LandlordGroupBy.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_count_aggregate_output_1.LandlordCountAggregate, { nullable: true }),
    __metadata("design:type", landlord_count_aggregate_output_1.LandlordCountAggregate)
], LandlordGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_avg_aggregate_output_1.LandlordAvgAggregate, { nullable: true }),
    __metadata("design:type", landlord_avg_aggregate_output_1.LandlordAvgAggregate)
], LandlordGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_sum_aggregate_output_1.LandlordSumAggregate, { nullable: true }),
    __metadata("design:type", landlord_sum_aggregate_output_1.LandlordSumAggregate)
], LandlordGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_min_aggregate_output_1.LandlordMinAggregate, { nullable: true }),
    __metadata("design:type", landlord_min_aggregate_output_1.LandlordMinAggregate)
], LandlordGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_max_aggregate_output_1.LandlordMaxAggregate, { nullable: true }),
    __metadata("design:type", landlord_max_aggregate_output_1.LandlordMaxAggregate)
], LandlordGroupBy.prototype, "_max", void 0);
LandlordGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], LandlordGroupBy);
exports.LandlordGroupBy = LandlordGroupBy;
//# sourceMappingURL=landlord-group-by.output.js.map