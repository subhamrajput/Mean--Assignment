const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express();

let config = require("./modules/config");
let dbRead = require("./modules/readData");
let dbAdd = require("./modules/addData");

app.get("/", async (req, res) => {
    try {
        const username = req.query.username;
        const password = req.query.password;
        const email = req.query.email;
        const mobile = req.query.mobile;

        const connection = mysql.createConnection(config.dbCon);

        await connection.connectAsync();
        //  http://localhost:3000/?username=NILPAWAR&password=WERT@123&email=nil@gmail.com&mobile=9900664478
        let sql =
            "INSERT INTO USER (NAME, PASSWORD, EMAIL, MOBILE) VALUES (?, ?, ?, ?)";
        await connection.queryAsync(sql, [username, password, email, mobile]);

        await connection.endAsync();

        const json = { message: "Hurrrayyy, Record Added, Lets Celebrate!!" };
        res.json(json);
    } catch (err) {
        console.log(err.message);
        const json = { message: "Error Occured!!" };
        res.json(json);
    }
});


let user = {
    NAME: "Yadnesh Lad",
    PASSWORD: "wrete@123",
    EMAIL: "yadnesh@gmail.com",
    MOBILE: "1234567890"
}

app.get("/adduser", async (req, res) => {
    try {
        // let user = req.query;
        await dbAdd.addData2(user);

        const json = { message: "Success" };
        res.json(json);
    } catch (err) {
        const json = { message: "Failure" };
        res.json(json);

    }
});


app.get("/alluser", async (req, res) => {
    try {

        const results = await dbRead.readData();
        res.json(results);

    } catch (err) {
        console.log(err.message);
        const json = { message: "Failure" };
        res.json(json);
    }
});

app.listen(3000);
