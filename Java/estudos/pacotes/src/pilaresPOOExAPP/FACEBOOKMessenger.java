package pilaresPOOExAPP;

public class FACEBOOKMessenger extends ServicoMensagemInstantanea {
	public void enviarMensagem() {
		validarConectadoInternet();
		System.out.println("MENSAGEM ENVIADA PELO FACEBOOK");
		salvarHistoricoMensagem();
	}

	public void receberMensagem() {
		validarConectadoInternet();
		System.out.println("MENSAGEM RECEBIDA PELO FACEBOOK");
		salvarHistoricoMensagem();
	}
}
