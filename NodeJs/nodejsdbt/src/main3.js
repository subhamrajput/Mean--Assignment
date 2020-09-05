const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let dbCon = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejsdbt'
};

let readDb = async () => {


    try {

        let connection = mysql.createConnection(dbCon);

        await connection.connectAsync()

        //let sql = "SELECT MOBILE FROM USER WHERE NAME = 'Shankar Lad'";
        //let sql = "SELECT MOBILE FROM USER WHERE NAME = ?";
        //let sql = "SELECT MOBILE FROM USER WHERE NAME = ?";
        //let result = await connection.queryAsync(sql, ['shankar lad']);
        let sql = "SELECT NAME,EMAIL FROM USER WHERE ID = ? AND MOBILE = ?";
        let result = await connection.queryAsync(sql, [1, '8805044997']);

        await connection.endAsync();

        console.log(result);

        return result;

    } catch (err) {
        console.log(err.message);
    }

};

readDb();