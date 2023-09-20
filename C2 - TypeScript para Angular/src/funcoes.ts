// Funções

function addNumber(x: number, y: number): number {
    return x + y;
}

let soma: number = addNumber(4, 7);
console.log(soma)

function addToHello(name: string) : string {
    return `Hello ${name}`;
}

console.log(addToHello('Victor'))

// Funções Multitypes

function CallToPhone(phone: number | string): number | string{
    return phone;
}

console.log(CallToPhone(33)) // ou retorna um number ou string