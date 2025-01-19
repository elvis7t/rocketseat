import users from "../db/users.js";
import { randomUUID } from 'node:crypto';
const listUsers = users;
export class usersModel {
    #listUsers;
    constructor() {
        this.#listUsers = listUsers;
    }
    select() {
        return this.#listUsers;
    }
    
    insert(user) {
        this.#listUsers.push({
            id: randomUUID(),
            name: user.name,
            email: user.email
        });
    }
    delete(id) {
        const userIndex = this.#listUsers.findIndex(user => user.id === id);
        if (userIndex > -1) {
            this.#listUsers.splice(userIndex, 1);
        }
    }
}

export default usersModel;