"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadAccountById = void 0;
class DbLoadAccountById {
    constructor(loadAccountByIdRepository) {
        this.loadAccountByIdRepository = loadAccountByIdRepository;
    }
    async loadById(id) {
        const account = await this.loadAccountByIdRepository.loadById(id);
        return account;
    }
}
exports.DbLoadAccountById = DbLoadAccountById;
