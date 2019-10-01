class ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log("Hello my name is " + this.name);
        return 'my name is ${this.name}'
    }
    showStats() {

        console.log('My name is ' + this.name + ' Health: ' + this.health + ' Speed: ' + this.speed + ' Strength: ' + this.strength)
        return this;
    }
     drinkSake() {
         this.health+=10;
        console.log("health +10 = "+this.health)
        return this;
    }

}

class Sensei {
    constructor(name) {
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        //A Sensei should have 200 Health, 10 speed, and 10 strength by default.

        console.log("health from sensi class "+this.health+"\n speed from sensi class "+ this.speed+"\n speed from sensi class " +this.strength);
        ninjaObj.drinkSake();
        ninjaObj.showStats();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;

    }
}
const ninjaObj = new ninja("Amal");
ninjaObj.sayName();
ninjaObj.showStats();
ninjaObj.drinkSake();
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();



