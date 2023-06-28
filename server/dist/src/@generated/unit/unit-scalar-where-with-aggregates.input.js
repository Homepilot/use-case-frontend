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
var UnitScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const bool_with_aggregates_filter_input_1 = require("../prisma/bool-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
const graphql_3 = require("@nestjs/graphql");
let UnitScalarWhereWithAggregatesInput = UnitScalarWhereWithAggregatesInput_1 = class UnitScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UnitScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], UnitScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UnitScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], UnitScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UnitScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], UnitScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", int_with_aggregates_filter_input_1.IntWithAggregatesFilter)
], UnitScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", int_with_aggregates_filter_input_1.IntWithAggregatesFilter)
], UnitScalarWhereWithAggregatesInput.prototype, "landlord_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], UnitScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", int_with_aggregates_filter_input_1.IntWithAggregatesFilter)
], UnitScalarWhereWithAggregatesInput.prototype, "surface", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_with_aggregates_filter_input_1.BoolWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", bool_with_aggregates_filter_input_1.BoolWithAggregatesFilter)
], UnitScalarWhereWithAggregatesInput.prototype, "furnished", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", int_with_aggregates_filter_input_1.IntWithAggregatesFilter)
], UnitScalarWhereWithAggregatesInput.prototype, "rent_amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], UnitScalarWhereWithAggregatesInput.prototype, "photo_url", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], UnitScalarWhereWithAggregatesInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], UnitScalarWhereWithAggregatesInput.prototype, "updated_at", void 0);
UnitScalarWhereWithAggregatesInput = UnitScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], UnitScalarWhereWithAggregatesInput);
exports.UnitScalarWhereWithAggregatesInput = UnitScalarWhereWithAggregatesInput;
//# sourceMappingURL=unit-scalar-where-with-aggregates.input.js.map