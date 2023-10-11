package construtores;

public class Pessoa {
	private String nome;
	private String cpf;
	private String endreco;
	
		// método construtor
	public Pessoa(String nome, String cpf) {
		this.nome = nome;
		this.cpf = cpf;
	}

	public String getNome() {
		return nome;
	}
	
	public String getCpf() {
		return cpf;
	}

	public String getEndreco() {
		return endreco;
	}
	public void setEndreco(String endreco) {
		this.endreco = endreco;
	}
	
	
}
