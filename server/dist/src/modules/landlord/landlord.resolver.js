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
exports.LandlordResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const landlord_model_1 = require("../../@generated/landlord/landlord.model");
const landlord_paginated_model_1 = require("./model/landlord-paginated.model");
const landlord_service_1 = require("./landlord.service");
const find_many_landlord_args_1 = require("../../@generated/landlord/find-many-landlord.args");
let LandlordResolver = class LandlordResolver {
    constructor(landlordService) {
        this.landlordService = landlordService;
    }
    landlords(params) {
        return this.landlordService.findManyPaginated(params);
    }
    displayName(landlord) {
        return this.landlordService.getDisplayName(landlord);
    }
};
__decorate([
    (0, graphql_1.Query)(() => landlord_paginated_model_1.LandlordPaginated),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_landlord_args_1.FindManyLandlordArgs]),
    __metadata("design:returntype", void 0)
], LandlordResolver.prototype, "landlords", null);
__decorate([
    (0, graphql_1.ResolveField)('display_name', () => String, { nullable: true }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [landlord_model_1.Landlord]),
    __metadata("design:returntype", void 0)
], LandlordResolver.prototype, "displayName", null);
LandlordResolver = __decorate([
    (0, graphql_1.Resolver)(landlord_model_1.Landlord),
    __metadata("design:paramtypes", [landlord_service_1.LandlordService])
], LandlordResolver);
exports.LandlordResolver = LandlordResolver;
//# sourceMappingURL=landlord.resolver.js.map