
const http = require("http");
const mod = require("./modules/module");

http.createServer((req, res) => {

    // CORS ENABLED
    // res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");


    res.setHeader("Access-Control-Allow-Origin", "*");
    const moduleData = JSON.stringify(mod);

    // to send the response to the client
    res.end(moduleData);

}).listen(5600);