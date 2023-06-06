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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const unit_service_1 = require("./unit.service");
const landlord_service_1 = require("../landlord/landlord.service");
const find_many_unit_args_1 = require("../../@generated/unit/find-many-unit.args");
const unit_paginated_model_1 = require("./model/unit-paginated.model");
const landlord_model_1 = require("../../@generated/landlord/landlord.model");
const unit_create_input_1 = require("../../@generated/unit/unit-create.input");
const unit_model_1 = require("../../@generated/unit/unit.model");
const unit_update_input_1 = require("../../@generated/unit/unit-update.input");
let UnitResolver = class UnitResolver {
    constructor(unitService, landlordService) {
        this.unitService = unitService;
        this.landlordService = landlordService;
    }
    units(params) {
        return this.unitService.findManyPaginated(params);
    }
    landlord(unit) {
        const { landlord_id } = unit;
        return this.landlordService.findOneWithID(landlord_id);
    }
    createUnit(data) {
        return this.unitService.createUnit(data);
    }
    updateUnit(id, data) {
        return this.unitService.updateUnit(id, data);
    }
    deleteUnit(id) {
        return this.unitService.deleteUnit(id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => unit_paginated_model_1.UnitPaginated),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_unit_args_1.FindManyUnitArgs]),
    __metadata("design:returntype", void 0)
], UnitResolver.prototype, "units", null);
__decorate([
    (0, graphql_1.ResolveField)(() => landlord_model_1.Landlord),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unit_model_1.Unit]),
    __metadata("design:returntype", void 0)
], UnitResolver.prototype, "landlord", null);
__decorate([
    (0, graphql_1.Mutation)(() => unit_model_1.Unit),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unit_create_input_1.UnitCreateInput]),
    __metadata("design:returntype", void 0)
], UnitResolver.prototype, "createUnit", null);
__decorate([
    (0, graphql_1.Mutation)(() => unit_model_1.Unit),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, unit_update_input_1.UnitUpdateInput]),
    __metadata("design:returntype", void 0)
], UnitResolver.prototype, "updateUnit", null);
__decorate([
    (0, graphql_1.Mutation)(() => unit_model_1.Unit),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UnitResolver.prototype, "deleteUnit", null);
UnitResolver = __decorate([
    (0, graphql_1.Resolver)(unit_model_1.Unit),
    __metadata("design:paramtypes", [unit_service_1.UnitService,
        landlord_service_1.LandlordService])
], UnitResolver);
exports.UnitResolver = UnitResolver;
//# sourceMappingURL=unit.resolver.js.map