"use strict";
// Classes
// Data Modifiers => Public, Private and Protect.
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} point`);
    }
}
// Character: superclass
// Magician: Subclass
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character('Ryu', 10, 99);
const p2 = new Magician('Mago', 8, 30, 100);
