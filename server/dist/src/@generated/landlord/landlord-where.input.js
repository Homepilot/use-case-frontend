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
var LandlordWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandlordWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const graphql_3 = require("@nestjs/graphql");
const unit_list_relation_filter_input_1 = require("../unit/unit-list-relation-filter.input");
let LandlordWhereInput = LandlordWhereInput_1 = class LandlordWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [LandlordWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LandlordWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LandlordWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LandlordWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LandlordWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LandlordWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], LandlordWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LandlordWhereInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LandlordWhereInput.prototype, "first_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LandlordWhereInput.prototype, "last_name", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LandlordWhereInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LandlordWhereInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", unit_list_relation_filter_input_1.UnitListRelationFilter)
], LandlordWhereInput.prototype, "Unit", void 0);
LandlordWhereInput = LandlordWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], LandlordWhereInput);
exports.LandlordWhereInput = LandlordWhereInput;
//# sourceMappingURL=landlord-where.input.js.map