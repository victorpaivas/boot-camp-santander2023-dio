package interfaceEquipamentos.loja;

import interfaceEquipamentos.copiadora.Copiadora;
import interfaceEquipamentos.digitalizadora.Digitalizadora;
import interfaceEquipamentos.digitalizadora.Scanner;
import interfaceEquipamentos.impressora.Impressora;
import interfaceExemplo.multifuncional.EquipamentoMultiFuncional;

public class Fabrica {
	public static void main(String[] args) {
		EquipamentoMultiFuncional em = new EquipamentoMultiFuncional();
		
		
		Impressora impressora = em;
		Digitalizadora digitalizadora = em;
		Copiadora copiadora = em;
		
		impressora.imprimir();
		digitalizadora.digitalizar();
		copiadora.copiar();
	}
}
