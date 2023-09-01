//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const saldoAtual = parseFloat(100);
const valorDeposito = parseFloat(10);
const valorRetirada = parseFloat(50);

//TODO: Calcular o saldo atualizado de acordo com a descrição deste desafio.
const funcionario1 = function calculaSaldo1(saldoAtual, valorDeposito, valorRetirada) {
    const saldoAtualizado = saldoAtual + valorDeposito - valorRetirada
    return saldoAtualizado.toFixed([1])
}

//TODO: Imprimir o a saída de conforme a tabela de exemplos (uma casa decimal).
console.log(`Saldo atualizado na conta${funcionario1()}`)