"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadAccountByIdController = void 0;
const load_account_by_id_controller_1 = require("../../../../presentation/controllers/account/load-account-by-id/load-account-by-id-controller");
const load_account_by_id_factory_1 = require("../../../../main/factories/usecases/account/load-account-by-id/load-account-by-id-factory");
const makeLoadAccountByIdController = () => {
    return new load_account_by_id_controller_1.LoadAccountByIdController((0, load_account_by_id_factory_1.makeDbLoadAccountById)());
};
exports.makeLoadAccountByIdController = makeLoadAccountByIdController;
