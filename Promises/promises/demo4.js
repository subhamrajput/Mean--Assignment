const fs = require("fs");
const Promise = require("bluebird");

// promisification :: converts all the callback methods and return as Promise
Promise.promisifyAll(fs);

let readDemo = () => {
    const filePath1 = "C:/Users/HP/Desktop/AWP/NodeJS/txt/2.txt";

    // Promise
    const mpromise = fs.readFileAsync(filePath1, { encoding: "utf-8" });
    console.log(mpromise);

    // SUCCESS
    mpromise.then((data) => {
        console.log(data);
    });

    //Error
    mpromise.catch((err) => {
        console.log(err.message);
    });
};

readDemo();