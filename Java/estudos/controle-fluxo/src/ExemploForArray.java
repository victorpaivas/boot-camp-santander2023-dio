public class ExemploForArray {
    public static void main(String[] args) {
        String alunos[] = {"VICTOR", "JOAO", "JULIA"};

        for ( int i = 0; i<alunos.length; i++){
            System.out.println("O aluno no indice i=" + i + " é " + alunos[i]);
        }
    }
}