// let myName = "Sonu      ";
// let mnChannel = "Gupta    ";
// console.log(myName.length);


let myHeros = ["Ironman", "CaptionAmerica"]

let heroPower = {
    Ironman: "Suite",
    CaptionAmerica: "Sheild",

    getIronmanPower: function(){
        // console.log(`Ironman power is ${this.Ironman}`);
    }
}

Object.prototype.Sonu = function(){
    // console.log(`Sonu is present in all objects`);
}

Array.prototype.heySonu = function(){
    // console.log(`Sonu says hello`);
}

// heroPower.Sonu()
// myHeros.Sonu()

// ------------------- Inheritance Section ----------------

let anotherUser = "SonuGupta     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUser.trueLength()
"Sonu".trueLength()
"HerbalTea".trueLength()