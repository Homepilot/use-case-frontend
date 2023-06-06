"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var UnitScalarFieldEnum;
(function (UnitScalarFieldEnum) {
    UnitScalarFieldEnum["id"] = "id";
    UnitScalarFieldEnum["landlord_id"] = "landlord_id";
    UnitScalarFieldEnum["name"] = "name";
    UnitScalarFieldEnum["surface"] = "surface";
    UnitScalarFieldEnum["furnished"] = "furnished";
    UnitScalarFieldEnum["rent_amount"] = "rent_amount";
    UnitScalarFieldEnum["photo_url"] = "photo_url";
    UnitScalarFieldEnum["created_at"] = "created_at";
    UnitScalarFieldEnum["updated_at"] = "updated_at";
})(UnitScalarFieldEnum = exports.UnitScalarFieldEnum || (exports.UnitScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(UnitScalarFieldEnum, { name: 'UnitScalarFieldEnum', description: undefined });
//# sourceMappingURL=unit-scalar-field.enum.js.map