// Interfaces (type x interfces)

type robot = {
    id: number | string;
    name: string;
};

const bot: robot = {
    id: 1,
    name: 'Megazord',
}

interface robot2  {
    id: number | string;
    name: string;
    sayHello(): string;

}

const bot2: robot2 = {
    id: 2,
    name: 'Megaman',
    sayHello: function (): string {
        return 'hello'
    }
}

//Diz o que tenho que Implementar

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello i'm ${this.name}`
    }

}

const p = new Pessoa(1, 'Victor')
console.log(p.sayHello());