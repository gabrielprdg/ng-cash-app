"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
class Mapper {
    static toDomainEntity(typeOrmUser) {
        const result = {
            id: typeOrmUser.id,
            username: typeOrmUser.username,
            password: typeOrmUser.password,
            accountId: typeOrmUser.accountId
        };
        return result;
    }
}
exports.Mapper = Mapper;
