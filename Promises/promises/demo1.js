const fs = require("fs");

let readFileDemo = () => {
    // Reading File 1
    const filePath1 = "C:/Users/HP/Desktop/AWP/NodeJS/txt/1.txt";
    fs.readFile(filePath1, { encoding: "utf-8" }, (err, data) => {
        console.log("1", data);
    });

    // Reading File 2
    const filePath2 = "C:/Users/HP/Desktop/AWP/NodeJS/txt/2.txt";
    fs.readFile(filePath2, { encoding: "utf-8" }, (err, data) => {
        console.log("2", data);
    });

    // Reading File 3
    const filePath3 = "C:/Users/HP/Desktop/AWP/NodeJS/txt/3.txt";
    fs.readFile(filePath3, { encoding: "utf-8" }, (err, data) => {
        console.log("3", data);
    });
};

readFileDemo();