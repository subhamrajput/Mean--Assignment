let Promise = require("bluebird");
let mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");



let addData = async (user) => {
    try {

        let Connection = mysql.createConnection(config.dbCon);

        await Connection.connectAsync();

        let sql = "INSERT INTO USER(NAME,PASSWORD,EMAIL,MOBILE) VALUES(?,?,?,?)";
        await Connection.queryAsync(sql, [
            user.name,
            user.password,
            user.email,
            user.mobile,
        ]);

        await Connection.endAsync();

    } catch (err) {
        console.log(err.message);
    }

};

module.exports = { addData };