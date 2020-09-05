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

        let sql = "INSERT INTO USER(NAME,PASSWORD,EMAIL,MOBILE) VALUES(?,?,?,?)";
        let result = await connection.queryAsync(sql, ["Swapnil Sawant", "zxcv@123", "swapnilsawant01@gmail.com", "8459170236"]);

        await connection.endAsync();

        console.log(result);

        return result;

    } catch (err) {
        console.log(err.message);
    }

};

readDb();