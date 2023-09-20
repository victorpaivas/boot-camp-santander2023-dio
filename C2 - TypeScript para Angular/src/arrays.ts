// Arrays

let dados: string[] = ['felipe', 'ana', 'jose'];
let dados2: Array<String> = ['ana', 'jose', 'victor'];

// Arrays de multitypes

let infos: (string | number)[] = ['Victor', 3, 10, 'José'];

// Arrays tuplas (vetor de multi type) porém tem lugar certo para cada coisa, (tendo que seguir a exata ordem que foi definada)
                                  //tupla
let boleto: [string, number, number] = ["água conta", 199.90, 3221231123]

// métodos com TS é identico ao do JS. ( todos os métodos server para cá)
// map, reduce, pop, filter