import Carro from './carro';

export default  class Concessionaria {
    private endereco: string
    private listaDeCarro: Array<Carro>

    constructor(endereco: string, listaDeCarro: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarro = listaDeCarro
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarro;
    }
}