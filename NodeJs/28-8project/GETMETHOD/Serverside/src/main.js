
const express = require("express");//to create server
const app = express();

const cors = require("cors");//unblock cors policy
app.use(cors());

let dbAdd = require("./modules/addData"); // add user module import

/********************************** USING GET METHOD ***************************************************** */
app.get("/adduser", async (req, res) => {
    try {

        let user = req.query;

        await dbAdd.addData(user);

        const json = { message: "Success" };
        res.json(json);
    } catch (err) {
        const json = { message: "Failure" };
        res.json(json);

    }
});

app.listen(3000);

//http://localhost:3000/adduser?name=shanky&password=wretet&email=shanky@gmail.com&mobile=8805044997