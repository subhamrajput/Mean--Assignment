let Promise = require("bluebird");
let mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");

// reading all users
let readData = async () => {
    try {

        let Connection = mysql.createConnection(config.dbCon);

        await Connection.connectAsync();

        let sql = "SELECT * FROM USER";

        let result = await Connection.queryAsync(sql);

        await Connection.endAsync();

        console.log(result);

        return result;

    } catch (err) {
        console.log(err.message);
    }

};

//reading  users by query
let readData1 = async (id, name) => {
    try {

        let Connection = mysql.createConnection(config.dbCon);

        await Connection.connectAsync();

        let sql = "SELECT * FROM USER WHERE ID=? AND NAME=?";

        let result = await Connection.queryAsync(sql, [id, name]);

        await Connection.endAsync();

        console.log(result);

        return result;

    } catch (err) {
        console.log(err.message);
    }

};

//reading users by json object
let readData2 = async (user) => {
    try {

        let Connection = mysql.createConnection(config.dbCon);

        await Connection.connectAsync();

        let sql = "SELECT * FROM USER WHERE MOBILE=?";

        let result = await Connection.queryAsync(sql, [user.MOBILE]);

        await Connection.endAsync();

        console.log(result);

        return result;

    } catch (err) {
        console.log(err.message);
    }

};

module.exports = { readData, readData1, readData2 };