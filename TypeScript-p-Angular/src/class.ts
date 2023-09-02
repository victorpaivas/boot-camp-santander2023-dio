// Classes
// Data Modifiers => Public, Private and Protect.

class Character {
    private name?: string
    stregth: number
    skill: number
    
    constructor(name: string, stregth: number, skill: number) {
        this.name = name
        this.stregth = stregth;
        this.skill = skill;
    }
    attack(): void{
        console.log(`Attack with ${this.stregth} point`)
    }
}
// Character: superclass
// Magician: Subclass
class Magician extends Character{
    magicPoints: number
    constructor(name: string, stregth: number, skill: number, magicPoints: number) {       
        super(name, stregth, skill)
        this.magicPoints = magicPoints
    }
}

const p1 = new Character('Ryu',10, 99);
const p2 = new Magician('Mago', 8, 30, 100)