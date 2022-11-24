"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_transaction_controller_factory_1 = require("../factories/controllers/transaction/add-transaction/add-transaction-controller-factory");
const express_route_adapter_1 = require("../../main/adapters/express-route-adapter");
const auth_1 = require("../../main/factories/middlewares/auth");
const load_transactions_controller_factory_1 = require("../../main/factories/controllers/transaction/load-transactions/load-transactions-controller-factory");
exports.default = (router) => {
    router.post('/transaction', auth_1.auth, (0, express_route_adapter_1.adaptRoute)((0, add_transaction_controller_factory_1.makeAddTransactionController)()));
    router.get('/transaction/:id', auth_1.auth, (0, express_route_adapter_1.adaptRoute)((0, load_transactions_controller_factory_1.makeLoadTransactionsController)()));
};
