package pilaresPOOExAPP;

public class TELEGRAMMessenger extends ServicoMensagemInstantanea {

	@Override
	public void enviarMensagem() {
		validarConectadoInternet();
		System.out.println("MENSAGEM ENVIADA PELO TELEGRAM");
		salvarHistoricoMensagem();
	}

	@Override
	public void receberMensagem() {
		validarConectadoInternet();
		System.out.println("MENSAGEM RECEBIDA PELO TELEGRAM");
		salvarHistoricoMensagem();
	}
	
}
