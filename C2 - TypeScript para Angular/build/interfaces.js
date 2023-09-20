"use strict";
// Interfaces (type x interfces)
const bot = {
    id: 1,
    name: 'Megazord',
};
const bot2 = {
    id: 2,
    name: 'Megaman',
    sayHello: function () {
        return 'hello';
    }
};
//Diz o que tenho que Implementar
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, 'Victor');
console.log(p.sayHello());
