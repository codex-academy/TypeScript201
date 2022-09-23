function greet(name : string) {
    return `Hello, ${name}`;
}

greet("André");
greet("Andrey");

// TS setup

// create a class

// One class - this is the template or Blue Print of the code

// a class - software construct that combines data & behaviour

// a class can have a constructor - that is called when an instance of a class is create

// a class can have methods

// methods can access instance variables / data of the class  use this.

// we can hide methods & variables on a class using private

// we can create mulitple instances of a class using new...

class Person {

    // data - instance variables
    private idNumber: string;
    private firstName: string;
    private lastName: string;

    constructor(idNumber: string, firstName: string, lastName: string) {
        this.idNumber = idNumber;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName(): string {

        console.log(this.getSurnameWithId());
        console.log("---");
        return `${this.firstName} ${this.lastName} with an IdNumber of ${this.idNumber}`;
    }

    getSurnameWithId(): string {
        return `${this.lastName} with an IdNumber of ${this.idNumber}`;
    }

}

// create instance of the Person Class
// Objects are instance of a class...

const andrey = new Person("76...", "André", "Vermeulen");
const felix = new Person("2012...", "Felix", "Vermeulen");

console.log(andrey.getFullName());
// console.log(andrey.getSurnameWithId());

// console.log(felix.getFullName());


// console.log(andrey.firstName);

// felix.firstName = 'Bob';

// console.log(felix);

// create an abstract class

// create an interface

// use polymorphism

