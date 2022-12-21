"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const load_account_by_id_controller_factory_1 = require("../../main/factories/controllers/account/load-account-by-id-controller-factory");
const express_route_adapter_1 = require("../../main/adapters/express-route-adapter");
exports.default = (router) => {
    router.get('/account/:id', (0, express_route_adapter_1.adaptRoute)((0, load_account_by_id_controller_factory_1.makeLoadAccountByIdController)()));
};
