
abstract class Employee {
    constructor(private firstName: string, private lastName: string) {
    }

    abstract getSalary(): number
    
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public salarySlip(): string {
        return `${this.fullName} makes R${this.getSalary()}.`;
    }
}



class WeeklyWageEarner extends Employee {

    constructor(firstName : string, lastName :string, private dailyRate : number) {
        super(firstName, lastName)
    }

    getSalary(): number {
        return this.dailyRate * 5;
    }
}

class FortnitelyWageEarner extends Employee {

    constructor(firstName : string, lastName :string, private dailyRate : number) {
        super(firstName, lastName)
    }

    getSalary(): number {
        return this.dailyRate * 10;
    }
}

const joBloggs = new WeeklyWageEarner("Jo", "Bloggs", 20);
const joBrown = new FortnitelyWageEarner("Jo", "Brown", 20);

class Totals {

    private totalEarned: number;

    constructor() {
        this.totalEarned = 0;
    }


    add(e : Employee) {


        console.log(e.salarySlip());


        this.totalEarned += e.getSalary();
    }

    total() {
        return this.totalEarned;
    }
}


console.log(joBloggs.salarySlip())
console.log(joBrown.salarySlip())

console.log('--------------')

const total = new Totals();

total.add(joBloggs)
total.add(joBrown)

console.log(total.total());




