"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddUser = void 0;
class DbAddUser {
    constructor(hasher, addUserRepository, loadUserByUserNameRepository) {
        this.hasher = hasher;
        this.addUserRepository = addUserRepository;
        this.loadUserByUserNameRepository = loadUserByUserNameRepository;
    }
    async add(userData) {
        const loadByUsername = await this.loadUserByUserNameRepository.loadByUsername(userData.username);
        if (!loadByUsername) {
            const hashedPassword = await this.hasher.hash(userData.password);
            /*
              Object.assign -> create a new object and new properties called SOURCES
              are added and if the next SOURCE has a property equal to the previous SOURCE,
              this old property is changed
            */
            const user = await this.addUserRepository.add(Object.assign({}, userData, { password: hashedPassword }));
            return user;
        }
        return null;
    }
}
exports.DbAddUser = DbAddUser;
