package list.OperacoesBasicas;

import java.util.ArrayList;
import java.util.List;

public class CarrinhoDeCompras {

    //atributo

    List<Item> itemList;

    public CarrinhoDeCompras() {
        this.itemList = new ArrayList<>();
    }

    public void adicionarItem(String nome, double preco, int quantidade) {

        itemList.add(item);
    }

    public void removeItem(String nome) {
        List<Item> tarefaParaRemover = new ArrayList<>();
        for(Item i: itemList) {
            if(i.getNome().equalsIgnoreCase(nome)) {
                tarefaParaRemover.add(i);
            }
        }
        itemList.removeAll(tarefaParaRemover);
    }

    public void calcularValorTotal() {
        double valorTotal = 0d;
        if(!itemList.isEmpty()) {
            for(Item i: itemList){

            }
        }
    }
}
