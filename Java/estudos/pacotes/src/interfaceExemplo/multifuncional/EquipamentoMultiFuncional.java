package interfaceExemplo.multifuncional;

import interfaceEquipamentos.copiadora.Copiadora;
import interfaceEquipamentos.digitalizadora.Digitalizadora;
import interfaceEquipamentos.impressora.Impressora;

public class EquipamentoMultiFuncional implements Impressora, Digitalizadora, Copiadora{

	public void imprimir() {
		System.out.println("IMPRIMINDO VIA EQUIPAMENTO MULTI FUNCIONAL..");
	}

	public void digitalizar() {
		System.out.println("DIGITALIZANDO VIA EQUIPAMENTO MULTI FUNCIONAL..");
		
	}

	public void copiar() {
		System.out.println("COPIANDO VIA EQUIPAMENTO MULTI FUNCIONAL..");
		
	}

}
