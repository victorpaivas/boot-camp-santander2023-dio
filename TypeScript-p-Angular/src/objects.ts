// Objeto sem previsibilidade

let produto: object = {
    name: 'victor',
    cidade: 'Guarujá',
    idade: 28,
};

// Objeto tipado => com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: 'Livro',
    preco: 33.99,
    unidades: 5,
};

console.log(meuProduto)