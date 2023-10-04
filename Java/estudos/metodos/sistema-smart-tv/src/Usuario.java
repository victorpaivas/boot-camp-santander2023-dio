public class Usuario {
    public static void main(String[] args) throws Exception {
        
        SmartTv smartTv = new SmartTv();

        System.out.println("TV LIGADA (PADRÃO):" + smartTv.ligada);

        System.out.println("CANAL ATUAL (PADRÃO):" + smartTv.canal);

        System.out.println("VOLUME ATUAL (PADRÃO):" + smartTv.volume);

        smartTv.ligar();
         System.out.println("Novo Status -> TV LIGADA:" + smartTv.ligada);

         smartTv.aumentarVolume();
         smartTv.aumentarVolume();
         System.out.println("VOLUME ATUAL:" + smartTv.volume);

         smartTv.mudarCanal(23);
         System.out.println("CANAL ATUAL:" + smartTv.canal);
    }
}
