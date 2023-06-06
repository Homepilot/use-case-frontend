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
exports.UnitRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const unit_where_input_1 = require("./unit-where.input");
let UnitRelationFilter = class UnitRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => unit_where_input_1.UnitWhereInput, { nullable: true }),
    __metadata("design:type", unit_where_input_1.UnitWhereInput)
], UnitRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_where_input_1.UnitWhereInput, { nullable: true }),
    __metadata("design:type", unit_where_input_1.UnitWhereInput)
], UnitRelationFilter.prototype, "isNot", void 0);
UnitRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], UnitRelationFilter);
exports.UnitRelationFilter = UnitRelationFilter;
//# sourceMappingURL=unit-relation-filter.input.js.map