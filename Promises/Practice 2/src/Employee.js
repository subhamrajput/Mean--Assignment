class Employee {
    constructor() {
    }

    getEmp() {
        return "I am a NodeJs... In Module Export...i am in Employee";
    }
}
//exporting the class name
module.exports = Employee;