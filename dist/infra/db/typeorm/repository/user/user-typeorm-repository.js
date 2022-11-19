"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTypeOrmRepository = void 0;
const typeorm_user_1 = require("../../entity/typeorm-user");
const app_data_source_1 = require("../../helper/app-data-source");
const mapper_1 = require("./mapper");
class UserTypeOrmRepository {
    async add(userData) {
        const insertResult = await app_data_source_1.AppDataSource.getInstance()
            .createQueryBuilder()
            .insert()
            .into(typeorm_user_1.TypeOrmUser)
            .values([
            {
                username: userData.username,
                password: userData.password
            }
        ])
            .execute();
        return insertResult.raw;
    }
    async loadByUsername(username) {
        let user;
        const result = await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_user_1.TypeOrmUser)
            .findOneBy({ username });
        if (result)
            user = mapper_1.Mapper.toDomainEntity(result);
        return user;
    }
    async loadByToken(token, role) {
        let user;
        const result = await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_user_1.TypeOrmUser)
            .createQueryBuilder('user')
            .where({ accessToken: token })
            .getOne();
        if (result)
            user = mapper_1.Mapper.toDomainEntity(result);
        return user;
    }
    async updateAccessToken(id, token) {
        await app_data_source_1.AppDataSource.getInstance()
            .createQueryBuilder()
            .update()
            .set({
            accessToken: token
        })
            .where({ id });
    }
}
exports.UserTypeOrmRepository = UserTypeOrmRepository;
