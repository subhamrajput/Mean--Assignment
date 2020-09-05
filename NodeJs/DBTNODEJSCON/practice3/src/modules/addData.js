let Promise = require("bluebird");
let mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");

// reading all users
let addData = async () => {
    try {

        let Connection = mysql.createConnection(config.dbCon);

        await Connection.connectAsync();

        let sql = "INSERT INTO USER(NAME,PASSWORD,EMAIL,MOBILE) VALUES(?,?,?,?)";
        await Connection.queryAsync(sql, ["Gaurav Shetye", "asdf@123", "gaurav@gmail.com", "9423879640"]);

        await Connection.endAsync();

    } catch (err) {
        console.log(err.message);
    }

};

let addData1 = async (name, password, email, mobile) => {
    try {

        let Connection = mysql.createConnection(config.dbCon);

        await Connection.connectAsync();

        let sql = "INSERT INTO USER(NAME,PASSWORD,EMAIL,MOBILE) VALUES(?,?,?,?)";
        await Connection.queryAsync(sql, [name, password, email, mobile]);

        await Connection.endAsync();

    } catch (err) {
        console.log(err.message);
    }

};

let addData2 = async (user) => {
    try {

        let Connection = mysql.createConnection(config.dbCon);

        await Connection.connectAsync();

        let sql = "INSERT INTO USER(NAME,PASSWORD,EMAIL,MOBILE) VALUES(?,?,?,?)";
        await Connection.queryAsync(sql, [user.NAME, user.PASSWORD, user.EMAIL, user.MOBILE]);

        await Connection.endAsync();

        return;

    } catch (err) {
        console.log(err.message);
    }

};

module.exports = { addData, addData1, addData2 };