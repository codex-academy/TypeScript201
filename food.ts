
interface Food {
    eat() : string;
    calories() : number;
}

interface Exercise {
    doIt(person : EatingPerson) : number;
}

class Porridge implements Food {
    eat() {
        return "eaten porridge";
    }

    calories(): number {
        return 65;
    }
}

class Snack implements Food {
    eat() {
        return "eaten a snack";
    }

    calories(): number {
        return 25;
    }
}

class Cereal implements Food {
    eat() {
        return "eaten cereal";
    }

    calories(): number {
        return 45;
    }
}

class Burger implements Food {
    eat() {
        return "eaten a burger";
    }

    calories(): number {
        return 125;
    }
}

class EatingPerson {

    private name : string
    private weightIndex : number = 0;

    constructor(name : string) {
        this.name = name;
    }

    eat(food : Food) {

        this.weightIndex += food.calories();
        console.log( this.name + " " +  food.eat());
    }

    health(){
        return this.weightIndex;
    }

    doExercise( exercise : Exercise) {
        this.weightIndex = exercise.doIt(this);
    }

}

const food:Food = new Porridge();

var jodie = new EatingPerson('Jodie');

jodie.eat(new Porridge());
jodie.eat(new Snack());
jodie.eat(new Cereal());

var lindani = new EatingPerson('Lindani');

lindani.eat(new Porridge());
lindani.eat(new Burger());
lindani.eat(new Porridge());
// lindani.eat(new Food());


// objects use references
const burger = new Burger();
lindani.eat(burger);


// classes use inheritence
class Pizza implements Food {
    eat() {
        return "eaten a Pizza"
    }
    calories(): number {
        return 135;
    }
}

const pizza = new Pizza();
lindani.eat(pizza);

console.log(jodie.health())
console.log(lindani.health())

class Jog implements Exercise {
    doIt(person: EatingPerson): number {

        console.log('Jogging...')
        return person.health() - 75;
    }
}

class Sprint implements Exercise {
    doIt(person: EatingPerson): number {
        console.log('Sprinting...')
        return person.health() - 105;
    }
}

lindani.doExercise(new Jog());
lindani.doExercise(new Jog());
lindani.doExercise(new Jog());
lindani.doExercise(new Sprint());

console.log(lindani.health());
