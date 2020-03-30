import {connect, ProductModel} from './db';
import {AuthService} from "./service";
import User from "./db/user";

connect({
    user: 'amir',
    database: 'TEST_2',
    host: 'localhost',
    password: 'p3141592',
});

(async () => {
    await AuthService.signup('amir afsari', 'afsamir', '1234');
    console.log(await User.getAllUser())
    }
)();
