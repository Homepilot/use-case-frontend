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
exports.UnitController = void 0;
const common_1 = require("@nestjs/common");
const find_many_unit_args_1 = require("../../@generated/unit/find-many-unit.args");
const unit_service_1 = require("./unit.service");
const unit_update_input_1 = require("../../@generated/unit/unit-update.input");
let UnitController = class UnitController {
    constructor(unitService) {
        this.unitService = unitService;
    }
    findAll(params) {
        return this.unitService.findManyPaginated(params);
    }
    update(id, data) {
        return this.unitService.updateUnit(id, data);
    }
    delete(id) {
        return this.unitService.deleteUnit(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_unit_args_1.FindManyUnitArgs]),
    __metadata("design:returntype", void 0)
], UnitController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, unit_update_input_1.UnitUpdateInput]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "delete", null);
UnitController = __decorate([
    (0, common_1.Controller)('units'),
    __metadata("design:paramtypes", [unit_service_1.UnitService])
], UnitController);
exports.UnitController = UnitController;
//# sourceMappingURL=unit.controller.js.map