


class TrafficLight {

    // data ?

    private color : string;

    constructor() {
        this.color = 'red';
    }

    // return the current color
    signal () : string {
        return this.color;
    }


    isGreen() {
        return this.color == 'green';
    }

    isOrange() {
        return this.color == 'orange';
    }

    isRed() {
        return this.color == 'red';
    }

    makeRed() {
        this.color = 'red';
    }

    makeGreen() {
        this.color = 'green'
    }

    makeOrange() {
        this.color = 'orange'
    }
}

class Vehicle {

    private name : string;

    private speed : number;

    constructor(name: string) {
        this.name = name;
        this.speed = 0;
    }

    currentSpeed() {
        return this.speed;
    }

    reachCrossing(tf : TrafficLight) : string {

        var status = 'unknown';
        
        if (tf.isGreen()){
            status = 'go!';
            this.speed += 30;
        } else if (tf.isOrange()) {
            status = 'slow down!';
            if (this.speed > 20) {
                this.speed -= 20;
            }
        } else if (tf.isRed()) {
            status = 'stop!';
            this.speed = 0;
        }

        return `${this.name} -> ${status}`;

    }
}

const trafficLight1 = new TrafficLight();
const trafficLight2 = new TrafficLight();

trafficLight1.makeOrange();
trafficLight2.makeGreen();

const tazz = new Vehicle('Tazz 123');
const vivo = new Vehicle('Vivo 789');

// console.log(trafficLight1.signal());
console.log(tazz.reachCrossing(trafficLight1));
console.log(tazz.currentSpeed());

console.log(vivo.reachCrossing(trafficLight2));
console.log(vivo.currentSpeed());
