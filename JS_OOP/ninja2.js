function Ninja(name, health){
    this.name=name;
    this.health=100;
    var speed=3;
    var strength=3;
    Ninja.prototype.sayName=function (){
        console.log("Hello my name is "+ this.name);
        return this;
    };
    Ninja.prototype.showStats=function(){
        this.speed=speed;
        this.strength=strength;
       console.log('My name is '+this.name+ ' Health: '+this.health+' Speed: '+this.speed+' Strength: '+this.strength)
       return this;
    };
    Ninja.prototype.drinkSake=function(){
        console.log(this.health+10)
      return this;
    };
    Ninja.prototype.punch=function(){
        this.health-=5;
        console.log("Goemon was punched by Bill Gates and lost 5 Health! "+this.health)
        return this;
     };
     Ninja.prototype.kick=function(){
         this.strength=1;
        this.health-=15;
        console.log("Bill Gates was kicked by Goemon and lost 15 Health! "+this.health)
        return this;
     };
}
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);