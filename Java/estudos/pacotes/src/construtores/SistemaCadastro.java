package construtores;

public class SistemaCadastro {
	public static void main(String[] args) {
		Pessoa marcos = new Pessoa("Marcos", "123.123.123.23");
		
		marcos.setEndreco("RUA DAS MARIAS");
		
		System.out.println("OI EU SOU " + marcos.getNome() + " MEU CPF É " + marcos.getCpf() + " MORO NA RUA " + marcos.getEndreco());
		
	}
}
