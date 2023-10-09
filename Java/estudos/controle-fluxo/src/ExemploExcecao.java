
import java.text.NumberFormat;
import java.text.ParseException;

public class ExemploExcecao {
    public static void main(String[] args) throws ParseException {

        try {
            Number valor = Double.valueOf("a1.75");

            Number valorDois = NumberFormat.getInstance().parse("a1.75");

            System.out.println(valor);
            System.out.println(valorDois);

        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
