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
exports.FindFirstUnitArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const unit_where_input_1 = require("./unit-where.input");
const class_transformer_1 = require("class-transformer");
const unit_order_by_with_relation_input_1 = require("./unit-order-by-with-relation.input");
const unit_where_unique_input_1 = require("./unit-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const unit_scalar_field_enum_1 = require("./unit-scalar-field.enum");
let FindFirstUnitArgs = class FindFirstUnitArgs {
};
__decorate([
    (0, graphql_1.Field)(() => unit_where_input_1.UnitWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => unit_where_input_1.UnitWhereInput),
    __metadata("design:type", unit_where_input_1.UnitWhereInput)
], FindFirstUnitArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [unit_order_by_with_relation_input_1.UnitOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstUnitArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => unit_where_unique_input_1.UnitWhereUniqueInput, { nullable: true }),
    __metadata("design:type", unit_where_unique_input_1.UnitWhereUniqueInput)
], FindFirstUnitArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstUnitArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstUnitArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [unit_scalar_field_enum_1.UnitScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstUnitArgs.prototype, "distinct", void 0);
FindFirstUnitArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstUnitArgs);
exports.FindFirstUnitArgs = FindFirstUnitArgs;
//# sourceMappingURL=find-first-unit.args.js.map