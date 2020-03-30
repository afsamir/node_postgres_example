import {getPool} from './connection'

class Product {
    static async getAllProducts() {
        let res = await getPool().query(`select * from Products;`);
        return res.rows;
    }

    static async getProductByName(name) {
        let res = await getPool().query(`select * from Products where name = '${name}';`);
        return res.rows;
    }
}

export default Product
