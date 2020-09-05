// Internal Module by NodeJs

const http = require('http');

http.createServer((request, response) => {

    let person = {
        name: 'Shankar',
        lname: 'Lad',
        mob: 8805044997
    }

    response.end(JSON.stringify(person));

}).listen(5500);
