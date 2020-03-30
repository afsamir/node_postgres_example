import {UsersModel} from '../db'

class Auth {

    static async signup(name, username, password) {

        await UsersModel.createUser(name, username, password)

    }
}

export default Auth;
