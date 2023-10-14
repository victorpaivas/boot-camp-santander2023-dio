package pilaresPOOExAPP;

public class MSNMessenger extends ServicoMensagemInstantanea {
	
	public void enviarMensagem() {
		validarConectadoInternet();
		System.out.println("MENSAGEM ENVIADA PELO MSN");
		salvarHistoricoMensagem();
	}

	public void receberMensagem() {
		validarConectadoInternet();
		System.out.println("MENSAGEM RECEBIDA PELO MSN");
		salvarHistoricoMensagem();
		
	}
}
