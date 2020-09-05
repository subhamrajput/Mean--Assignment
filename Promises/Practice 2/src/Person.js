class Person {
    constructor() {
    }

    getname() {
        return "I am a NodeJs... In Module Export";
    }
}
//exporting the class name
module.exports = Person;