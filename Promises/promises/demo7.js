const fs = require("fs");
const Promise = require("bluebird");

// promisification :: converts all the callback methods and return as Promise
Promise.promisifyAll(fs);

let readDemo = () => {
    const filePath1 = "C:/Users/HP/Desktop/AWP/NodeJS/txt/2.txt";

    fs.readFileAsync(filePath1, { encoding: "utf-8" })
        .then((data) => {
            console.log(data);

            const filePath2 = "C:/Users/HP/Desktop/AWP/NodeJS/txt/2.txt";
            return fs.readFileAsync(filePath2, { encoding: "utf-8" });
        })
        .then((data) => {
            console.log(data);

            const filePath3 = "C:/Users/HP/Desktop/AWP/NodeJS/txt/2.txt";
            return fs.readFileAsync(filePath3, { encoding: "utf-8" });
        })
        .then((data) => {
            console.log(data);

            const filePath4 = "C:/Users/HP/Desktop/AWP/NodeJS/txt/3.txt";
            return fs.readFileAsync(filePath4, { encoding: "utf-8" });
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
};

readDemo();
