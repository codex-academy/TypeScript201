"use strict";
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    salarySlip() {
        return `${this.fullName} makes R${this.getSalary()}.`;
    }
}
class WeeklyWageEarner extends Employee {
    constructor(firstName, lastName, dailyRate) {
        super(firstName, lastName);
        this.dailyRate = dailyRate;
    }
    getSalary() {
        return this.dailyRate * 5;
    }
}
class FortnitelyWageEarner extends Employee {
    constructor(firstName, lastName, dailyRate) {
        super(firstName, lastName);
        this.dailyRate = dailyRate;
    }
    getSalary() {
        return this.dailyRate * 10;
    }
}
const joBloggs = new WeeklyWageEarner("Jo", "Bloggs", 20);
const joBrown = new FortnitelyWageEarner("Jo", "Brown", 20);
class Totals {
    constructor() {
        this.totalEarned = 0;
    }
    add(e) {
        console.log(e.salarySlip());
        this.totalEarned += e.getSalary();
    }
    total() {
        return this.totalEarned;
    }
}
console.log(joBloggs.salarySlip());
console.log(joBrown.salarySlip());
console.log('--------------');
const total = new Totals();
total.add(joBloggs);
total.add(joBrown);
console.log(total.total());
