package pilaresPOO.ExemploPOO.APP;

import pilaresPOOExAPP.FACEBOOKMessenger;
import pilaresPOOExAPP.MSNMessenger;
import pilaresPOOExAPP.ServicoMensagemInstantanea;
import pilaresPOOExAPP.TELEGRAMMessenger;

public class ComputadorPedrinho {
	public static void main(String[] args) {
		
		ServicoMensagemInstantanea smi = null;
		
		String appEscolhido="fbm";
		
		if(appEscolhido.equals("msn"))
				smi = new MSNMessenger();
		else if(appEscolhido.equals("fbm"))
				smi = new FACEBOOKMessenger();
		else if(appEscolhido.equals("tlg"))
				smi = new TELEGRAMMessenger();
		
		smi.enviarMensagem();
		smi.receberMensagem();
	}
}
