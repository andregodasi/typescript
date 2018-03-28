import Veiculo from "./veiculo";

export default class Carro extends Veiculo{
    private numeroDePortas: number

    constructor(modelo: string, numeroDePortas: number, velocidade: number) {
        super(modelo, velocidade)
        this.numeroDePortas = numeroDePortas
    }

}