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
exports.UpdateOneLandlordArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const landlord_update_input_1 = require("./landlord-update.input");
const class_transformer_1 = require("class-transformer");
const landlord_where_unique_input_1 = require("./landlord-where-unique.input");
let UpdateOneLandlordArgs = class UpdateOneLandlordArgs {
};
__decorate([
    (0, graphql_1.Field)(() => landlord_update_input_1.LandlordUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => landlord_update_input_1.LandlordUpdateInput),
    __metadata("design:type", landlord_update_input_1.LandlordUpdateInput)
], UpdateOneLandlordArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => landlord_where_unique_input_1.LandlordWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => landlord_where_unique_input_1.LandlordWhereUniqueInput),
    __metadata("design:type", landlord_where_unique_input_1.LandlordWhereUniqueInput)
], UpdateOneLandlordArgs.prototype, "where", void 0);
UpdateOneLandlordArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneLandlordArgs);
exports.UpdateOneLandlordArgs = UpdateOneLandlordArgs;
//# sourceMappingURL=update-one-landlord.args.js.map