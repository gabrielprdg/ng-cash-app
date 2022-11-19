"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmUser = void 0;
const typeorm_1 = require("typeorm");
const typeorm_account_1 = require("./typeorm-account");
let TypeOrmUser = class TypeOrmUser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid', { primaryKeyConstraintName: 'user_pk' }),
    __metadata("design:type", String)
], TypeOrmUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TypeOrmUser.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TypeOrmUser.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => typeorm_account_1.TypeOrmAccount, (typeOrmAccount) => typeOrmAccount.id),
    __metadata("design:type", typeorm_account_1.TypeOrmAccount)
], TypeOrmUser.prototype, "accountId", void 0);
TypeOrmUser = __decorate([
    (0, typeorm_1.Entity)('user')
], TypeOrmUser);
exports.TypeOrmUser = TypeOrmUser;
