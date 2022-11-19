"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAthentication = void 0;
class DbAthentication {
    constructor(loadUserByUserNameRepository, hashComparer, encrypter, updateAccessTokenRepository) {
        this.loadUserByUserNameRepository = loadUserByUserNameRepository;
        this.hashComparer = hashComparer;
        this.encrypter = encrypter;
        this.updateAccessTokenRepository = updateAccessTokenRepository;
    }
    async auth(authentication) {
        const user = await this.loadUserByUserNameRepository.loadByUsername(authentication.username);
        if (user) {
            const isValid = await this.hashComparer.compare(authentication.password, user.password);
            if (isValid) {
                const accessToken = await this.encrypter.encrypt(user.id);
                await this.updateAccessTokenRepository.updateAccessToken(user.id, accessToken);
                return accessToken;
            }
        }
        return null;
    }
}
exports.DbAthentication = DbAthentication;
