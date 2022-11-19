"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadUserByToken = void 0;
class DbLoadUserByToken {
    constructor(decrypter, loadUserByTokenRepository) {
        this.decrypter = decrypter;
        this.loadUserByTokenRepository = loadUserByTokenRepository;
    }
    async load(accessToken, role) {
        const token = await this.decrypter.decrypt(accessToken);
        if (token) {
            const User = await this.loadUserByTokenRepository.loadByToken(accessToken, role);
            if (User) {
                return User;
            }
        }
        return null;
    }
}
exports.DbLoadUserByToken = DbLoadUserByToken;
