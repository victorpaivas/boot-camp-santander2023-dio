package pilaresPOO;

public class Autodromo {
	public static void main(String[] args) {
		Carro jeep = new Carro();
		jeep.ligar();
		jeep.setChassi("21221321");
		
		Moto z400 = new Moto();
		z400.setChassi("321123123");
		z400.ligar();
	}
}
