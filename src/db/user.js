import {getPool} from './connection';

class User {

    static async getAllUser() {
        let res = await getPool().query(`select * from users;`);
        return res.rows;
    }

    static async getUserByName(name) {
        let res = await getPool().query(`select * from users where name = '${name}';`);
        return res.rows;
    }

    static async createUser(name, username, password) {
        try {
            await getPool().query(`insert into users values('${name}', '${username}', '${password}', 0);`);
            return true;
        } catch (e) {
            return false
        }
    }
}

export default User
