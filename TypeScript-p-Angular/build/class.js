"use strict";
// Classes
class Character {
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} point`);
    }
}
const p1 = new Character(10, 99);
p1.attack();
