import pg, {Pool} from "pg";
import * as Promise from "bluebird";

Promise.promisifyAll(pg);

let pool;

export function getPool() {
    return pool;
}

export function connect(options) {
    pool = new Pool(options);
}
