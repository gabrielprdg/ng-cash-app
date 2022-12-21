"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAccountByIdController = void 0;
const http_helper_1 = require("../../../../presentation/helpers/https/http-helper");
class LoadAccountByIdController {
    constructor(loadAccountById) {
        this.loadAccountById = loadAccountById;
    }
    async handle(httpRequest) {
        try {
            const { id } = httpRequest.params;
            const account = await this.loadAccountById.loadById(id);
            return (0, http_helper_1.ok)({ account });
        }
        catch (err) {
            return (0, http_helper_1.serverError)(err);
        }
    }
}
exports.LoadAccountByIdController = LoadAccountByIdController;
