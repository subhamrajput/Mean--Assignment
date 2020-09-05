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

    // creating connection and saving it into variable `connection`
    try {
        let connection = mysql.createConnection(dbCon);

        await connection.connectAsync()

        console.log("Successfull");

        await connection.endAsync();
    } catch (err) {
        console.log(err.message);
    }


};

readDb();