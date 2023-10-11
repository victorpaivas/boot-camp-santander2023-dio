package escola;

public class Escola {
	
	// Padrão Java Beans com Getter e Setter
	public static void main(String[] args) {
		Aluno felipe = new Aluno();
		felipe.setNome("Felipe");
		felipe.setSobrenome("Silva");
		felipe.setIdade(8);
		
		System.out.println("O aluno " + felipe.getNome() + " " + felipe.getSobrenome() + " tem " + felipe.getIdade());
	}
}
