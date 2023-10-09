import java.util.Random;

public class ExemploDoWhile {
    public static void main(String[] args) {
        
        System.out.println("Discando....");
            //executando repetivda vezes até alguém atender
        do {
            System.out.println("telefone tocando");
        }while(tocando());

    }

    private static boolean tocando() {
        boolean atendeu = new Random().nextInt(3)==1;
        System.out.println("Atendeu?" + atendeu);
        // nega o ato de continuar tocando

        return ! atendeu;
    }
}
