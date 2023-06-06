"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitPaginated = void 0;
const graphql_1 = require("@nestjs/graphql");
const unit_model_1 = require("../../../@generated/unit/unit.model");
const pagination_type_1 = require("../../../utils/graphql/pagination.type");
let UnitPaginated = class UnitPaginated extends (0, pagination_type_1.Paginated)(unit_model_1.Unit) {
};
UnitPaginated = __decorate([
    (0, graphql_1.ObjectType)()
], UnitPaginated);
exports.UnitPaginated = UnitPaginated;
//# sourceMappingURL=unit-paginated.model.js.map