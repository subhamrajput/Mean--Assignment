
const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors()); // unblocking cors policy
app.use(express.json()); // this will help to read the data coming in body :: TEXT to JSON

let dbAdd = require("./modules/addData"); // add user module import

/********************************** USING POST METHOD ***************************************************** */


app.post("/adduser", async (req, res) => {
    try {
        const user = req.body; // before doing this // app.use(express.json());
        await dbAdd.addData(user);

        res.json({ message: "success post" });
    } catch (err) {
        res.json({ message: "failure post" });
    }
});

app.listen(3000);

//http://localhost:3000/adduser?name=shanky&password=wretet&email=shanky@gmail.com&mobile=8805044997