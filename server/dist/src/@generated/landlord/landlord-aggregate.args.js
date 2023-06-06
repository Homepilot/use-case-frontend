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
exports.LandlordAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const landlord_where_input_1 = require("./landlord-where.input");
const class_transformer_1 = require("class-transformer");
const landlord_order_by_with_relation_input_1 = require("./landlord-order-by-with-relation.input");
const landlord_where_unique_input_1 = require("./landlord-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const landlord_count_aggregate_input_1 = require("./landlord-count-aggregate.input");
const landlord_avg_aggregate_input_1 = require("./landlord-avg-aggregate.input");
const landlord_sum_aggregate_input_1 = require("./landlord-sum-aggregate.input");
const landlord_min_aggregate_input_1 = require("./landlord-min-aggregate.input");
const landlord_max_aggregate_input_1 = require("./landlord-max-aggregate.input");
let LandlordAggregateArgs = class LandlordAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => landlord_where_input_1.LandlordWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => landlord_where_input_1.LandlordWhereInput),
    __metadata("design:type", landlord_where_input_1.LandlordWhereInput)
], LandlordAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [landlord_order_by_with_relation_input_1.LandlordOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], LandlordAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_where_unique_input_1.LandlordWhereUniqueInput, { nullable: true }),
    __metadata("design:type", landlord_where_unique_input_1.LandlordWhereUniqueInput)
], LandlordAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LandlordAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LandlordAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_count_aggregate_input_1.LandlordCountAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_count_aggregate_input_1.LandlordCountAggregateInput)
], LandlordAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_avg_aggregate_input_1.LandlordAvgAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_avg_aggregate_input_1.LandlordAvgAggregateInput)
], LandlordAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_sum_aggregate_input_1.LandlordSumAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_sum_aggregate_input_1.LandlordSumAggregateInput)
], LandlordAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_min_aggregate_input_1.LandlordMinAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_min_aggregate_input_1.LandlordMinAggregateInput)
], LandlordAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_max_aggregate_input_1.LandlordMaxAggregateInput, { nullable: true }),
    __metadata("design:type", landlord_max_aggregate_input_1.LandlordMaxAggregateInput)
], LandlordAggregateArgs.prototype, "_max", void 0);
LandlordAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], LandlordAggregateArgs);
exports.LandlordAggregateArgs = LandlordAggregateArgs;
//# sourceMappingURL=landlord-aggregate.args.js.map