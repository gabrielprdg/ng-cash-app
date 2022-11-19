"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const typeorm_account_1 = require("../entity/typeorm-account");
const typeorm_transaction_1 = require("../entity/typeorm-transaction");
const typeorm_user_1 = require("../entity/typeorm-user");
class AppDataSource {
    static getInstance() {
        var _a, _b, _c, _d, _e;
        if (this.instance)
            return this.instance;
        this.instance = new typeorm_1.DataSource({
            type: 'postgres',
            host: (_a = process.env) === null || _a === void 0 ? void 0 : _a.DB_HOST,
            port: Number((_b = process.env) === null || _b === void 0 ? void 0 : _b.DB_PORT),
            username: (_c = process.env) === null || _c === void 0 ? void 0 : _c.DB_USER,
            password: (_d = process.env) === null || _d === void 0 ? void 0 : _d.DB_PASSWORD,
            database: (_e = process.env) === null || _e === void 0 ? void 0 : _e.DB_NAME,
            entities: [typeorm_user_1.TypeOrmUser, typeorm_account_1.TypeOrmAccount, typeorm_transaction_1.TypeOrmTransaction],
            synchronize: false,
            logging: false
        });
        return this.instance;
    }
}
exports.AppDataSource = AppDataSource;
