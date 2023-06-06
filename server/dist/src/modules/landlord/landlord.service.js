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
exports.LandlordService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let LandlordService = class LandlordService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findManyPaginated(params) {
        const { where } = params;
        const [units, count] = await this.prismaService.$transaction([
            this.prismaService.landlord.findMany(params),
            this.prismaService.landlord.count({ where }),
        ]);
        return {
            rows: units,
            count,
        };
    }
    async findUnique(params) {
        return this.prismaService.landlord.findUnique(params);
    }
    async findOneWithID(id) {
        return this.prismaService.landlord.findUnique({
            where: { id },
        });
    }
    getDisplayName(landlord) {
        const { gender, first_name, last_name } = landlord;
        const display_gender = gender === 'female' ? 'Ms.' : 'Mr.';
        const display_name = `${last_name} ${first_name}`;
        return `${display_gender} ${display_name}`;
    }
};
LandlordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LandlordService);
exports.LandlordService = LandlordService;
//# sourceMappingURL=landlord.service.js.map