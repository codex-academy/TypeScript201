"use strict";
class Porridge {
    eat() {
        return "eaten porridge";
    }
    calories() {
        return 65;
    }
}
class Snack {
    eat() {
        return "eaten a snack";
    }
    calories() {
        return 25;
    }
}
class Cereal {
    eat() {
        return "eaten cereal";
    }
    calories() {
        return 45;
    }
}
class Burger {
    eat() {
        return "eaten a burger";
    }
    calories() {
        return 125;
    }
}
class EatingPerson {
    constructor(name) {
        this.weightIndex = 0;
        this.name = name;
    }
    eat(food) {
        this.weightIndex += food.calories();
        console.log(this.name + " " + food.eat());
    }
    health() {
        return this.weightIndex;
    }
    doExercise(exercise) {
        this.weightIndex = exercise.doIt(this);
    }
}
const food = new Porridge();
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
class Pizza {
    eat() {
        return "eaten a Pizza";
    }
    calories() {
        return 135;
    }
}
const pizza = new Pizza();
lindani.eat(pizza);
console.log(jodie.health());
console.log(lindani.health());
class Jog {
    doIt(person) {
        console.log('Jogging...');
        return person.health() - 75;
    }
}
class Sprint {
    doIt(person) {
        console.log('Sprinting...');
        return person.health() - 105;
    }
}
lindani.doExercise(new Jog());
lindani.doExercise(new Jog());
lindani.doExercise(new Jog());
lindani.doExercise(new Sprint());
console.log(lindani.health());
