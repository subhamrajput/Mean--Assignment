let dbRead = require("./modules/readData");
let dbAdd = require("./modules/addData");

// dbRead.readData();
// dbRead.readData1(3, "Swapnil Sawant");

// let user = {
//     NAME: "shankar Lad",
//     PASSWORD: "qwerty@123",
//     EMAIL: "shankarlad17@gmail.com",
//     MOBILE: "8805044997"
// }

// dbRead.readData2(user);

/************************************************************* */
//dbAdd.addData();
//dbAdd.addData1("Pranav Lad", "zxc@123", "pranav@gmail.com", "9767481964");
let user = {
    NAME: "Sanika Lad",
    PASSWORD: "sdfg@123",
    EMAIL: "sanika@gmail.com",
    MOBILE: "8807776580"
}
dbAdd.addData2(user);