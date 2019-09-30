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
}
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
