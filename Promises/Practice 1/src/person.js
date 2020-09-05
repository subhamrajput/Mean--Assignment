
class Person {

    constructor() {
        console.log('I am in constructor...');
    }

    getPersonName() {
        console.log("I am a Shankar Lad");
    }

    static main() {
        let p = new Person();
        let op = p.getPersonName();
    }
}

Person.main();