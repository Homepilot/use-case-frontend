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
var UnitWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const bool_filter_input_1 = require("../prisma/bool-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const graphql_3 = require("@nestjs/graphql");
const landlord_relation_filter_input_1 = require("../landlord/landlord-relation-filter.input");
let UnitWhereInput = UnitWhereInput_1 = class UnitWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UnitWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], UnitWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UnitWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], UnitWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UnitWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], UnitWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], UnitWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], UnitWhereInput.prototype, "landlord_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], UnitWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], UnitWhereInput.prototype, "surface", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_filter_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", bool_filter_input_1.BoolFilter)
], UnitWhereInput.prototype, "furnished", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], UnitWhereInput.prototype, "rent_amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], UnitWhereInput.prototype, "photo_url", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], UnitWhereInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], UnitWhereInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_relation_filter_input_1.LandlordRelationFilter, { nullable: true }),
    __metadata("design:type", landlord_relation_filter_input_1.LandlordRelationFilter)
], UnitWhereInput.prototype, "landlord", void 0);
UnitWhereInput = UnitWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], UnitWhereInput);
exports.UnitWhereInput = UnitWhereInput;
//# sourceMappingURL=unit-where.input.js.map