"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandlordScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var LandlordScalarFieldEnum;
(function (LandlordScalarFieldEnum) {
    LandlordScalarFieldEnum["id"] = "id";
    LandlordScalarFieldEnum["gender"] = "gender";
    LandlordScalarFieldEnum["first_name"] = "first_name";
    LandlordScalarFieldEnum["last_name"] = "last_name";
    LandlordScalarFieldEnum["created_at"] = "created_at";
    LandlordScalarFieldEnum["updated_at"] = "updated_at";
})(LandlordScalarFieldEnum = exports.LandlordScalarFieldEnum || (exports.LandlordScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(LandlordScalarFieldEnum, { name: 'LandlordScalarFieldEnum', description: undefined });
//# sourceMappingURL=landlord-scalar-field.enum.js.map