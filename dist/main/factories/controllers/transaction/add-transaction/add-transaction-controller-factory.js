"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddTransactionController = void 0;
const add_transaction_factory_1 = require("../../../usecases/transaction/add-transaction/add-transaction-factory");
const add_transaction_controller_1 = require("../../../../../presentation/controllers/transaction/add-transaction/add-transaction-controller");
const add_transaction_validation_factory_1 = require("./add-transaction-validation-factory");
const self_transaction_verify_factory_1 = require("../../../../../main/factories/usecases/transaction/self-transaction-verify/self-transaction-verify-factory");
const makeAddTransactionController = () => {
    return new add_transaction_controller_1.AddTransactionController((0, add_transaction_factory_1.makeAddTransaction)(), (0, self_transaction_verify_factory_1.makeSelfTransactionVerify)(), (0, add_transaction_validation_factory_1.makeAddTransactionValidation)());
};
exports.makeAddTransactionController = makeAddTransactionController;
