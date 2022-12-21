"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTypeOrmRepository = void 0;
const typeorm_user_1 = require("../../entity/typeorm-user");
const app_data_source_1 = require("../../helper/app-data-source");
class UserTypeOrmRepository {
    async add(userData) {
        const user = new typeorm_user_1.TypeOrmUser();
        user.username = userData.username;
        user.password = userData.password;
        user.account = userData.account;
        const result = await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_user_1.TypeOrmUser)
            .save(user);
        return result;
    }
    async loadByUsername(username) {
        const result = await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_user_1.TypeOrmUser)
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.account', 'accountId')
            .where('user.username = :username', { username })
            .getOne();
        return result;
    }
    async loadByToken(token) {
        let user;
        const result = await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_user_1.TypeOrmUser)
            .createQueryBuilder('user')
            .where({ accessToken: token })
            .getOne();
        if (result)
            user = result;
        return user;
    }
    async updateAccessToken(id, token) {
        await app_data_source_1.AppDataSource.getInstance()
            .createQueryBuilder()
            .update(typeorm_user_1.TypeOrmUser)
            .set({
            accessToken: token
        })
            .where({ id });
    }
    async loadById(id) {
        // let user: any | null
        const result = await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_user_1.TypeOrmUser)
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.account', 'accountId')
            .where('user.id = :id', { id })
            .getOne();
        return result;
    }
}
exports.UserTypeOrmRepository = UserTypeOrmRepository;
