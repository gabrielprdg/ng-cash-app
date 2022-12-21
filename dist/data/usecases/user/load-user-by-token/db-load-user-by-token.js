"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserByToken = void 0;
class DbLoadUserByToken {
    constructor(decrypter, loadUserByIdRepository) {
        this.decrypter = decrypter;
        this.loadUserByIdRepository = loadUserByIdRepository;
    }
    async loadByToken(accessToken) {
        const userDecrypted = await this.decrypter.decrypt(accessToken);
        if (userDecrypted) {
            const user = await this.loadUserByIdRepository.loadById(userDecrypted.id);
            if (user) {
                return user;
            }
        }
        return null;
    }
}
exports.DbLoadUserByToken = DbLoadUserByToken;
