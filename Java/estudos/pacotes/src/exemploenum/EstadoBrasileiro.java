package exemploenum;

public enum EstadoBrasileiro {
	SAO_PAULO ("SP", "São Paulo", 10),
	RIO_JANEIRO ("RJ", "Rio de Janeiro", 11),
	PIAUI ("PI", "Piauí", 12),
	MARANHAO ("MA", "Maranhão", 13),
	ESPIRITO_SANTO ("ES", "Espirito Santo", 14),
	ACRE ("AC", "Acre", 15),
	CEARA ("CE" , "Ceará", 16)
	
	;
	
	private String nome;
	private String sigla;
	private int ibge;
	
	private EstadoBrasileiro(String sigla, String nome, int ibge) {
		this.sigla = sigla;
		this.nome = nome;
		this.ibge = ibge;
	}
	
	public int getIbge() {
		return ibge;
	}

	public String getNome() {
		return nome;
	}
	
	public String getSigla() {
		return sigla;
	}
	
	public String getNomeMaiusculo() {
		return nome.toUpperCase();
	}
		
	
}
