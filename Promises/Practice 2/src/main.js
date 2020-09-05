// Importing the Module
let Person = require('./Person');
let Employee = require('./Employee');

class Main {

    static main() {
        console.log("This is the execution point...");

        let p = new Person();
        let op = p.getname();
        console.log(op);

        let e = new Employee();
        let op1 = e.getEmp();
        console.log(op1);
    }
}

Main.main();