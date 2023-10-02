package edu.victor.primeirasemana;
public class MinhaClasse {

    public static void main(String[] args) {

        // Estrutura de variáveis
        // tipo nomeBemDefinido = atribuição;
        String primeiroNome = "Victor"; // string
        String segundoNome = "Silva";

        String nomeCompleto = nomeCompleto(primeiroNome, segundoNome);
        System.out.println(nomeCompleto);

        // boolean simOuNao = true; // boolean true or false
        // int idade = 28; // números inteiros
        // double altura = 1.74; //pontos
        // String spike; // não declarada ainda

    }

    public static String nomeCompleto(String primeiroNome, String segundoNome) {
        return "Resultado do método" + primeiroNome.concat(" ").concat(segundoNome);

        // Estrutura de métodos
        // tipodeRetorno NomeObjetivoNoInfinitivo e Parâmetros
    }

}
