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
exports.LandlordListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const landlord_where_input_1 = require("./landlord-where.input");
let LandlordListRelationFilter = class LandlordListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => landlord_where_input_1.LandlordWhereInput, { nullable: true }),
    __metadata("design:type", landlord_where_input_1.LandlordWhereInput)
], LandlordListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_where_input_1.LandlordWhereInput, { nullable: true }),
    __metadata("design:type", landlord_where_input_1.LandlordWhereInput)
], LandlordListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_where_input_1.LandlordWhereInput, { nullable: true }),
    __metadata("design:type", landlord_where_input_1.LandlordWhereInput)
], LandlordListRelationFilter.prototype, "none", void 0);
LandlordListRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], LandlordListRelationFilter);
exports.LandlordListRelationFilter = LandlordListRelationFilter;
//# sourceMappingURL=landlord-list-relation-filter.input.js.map