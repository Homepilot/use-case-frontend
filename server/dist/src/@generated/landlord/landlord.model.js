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
exports.Landlord = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const unit_model_1 = require("../unit/unit.model");
const landlord_count_output_1 = require("./landlord-count.output");
let Landlord = class Landlord {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], Landlord.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Landlord.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Landlord.prototype, "first_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Landlord.prototype, "last_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Landlord.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Landlord.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => [unit_model_1.Unit], { nullable: true }),
    __metadata("design:type", Array)
], Landlord.prototype, "Unit", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_count_output_1.LandlordCount, { nullable: false }),
    __metadata("design:type", landlord_count_output_1.LandlordCount)
], Landlord.prototype, "_count", void 0);
Landlord = __decorate([
    (0, graphql_2.ObjectType)()
], Landlord);
exports.Landlord = Landlord;
//# sourceMappingURL=landlord.model.js.map