package pilaresPOOExAPP;

public abstract class ServicoMensagemInstantanea {
	public abstract void enviarMensagem();
	public abstract void receberMensagem();
	
	protected void salvarHistoricoMensagem() {
		
	}
	
	protected void validarConectadoInternet() {
		System.out.println("VALIDANDO SE ESTÁ CONECTADO A INTERNET");
	}
}
