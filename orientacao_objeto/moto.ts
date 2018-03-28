import Veiculo from "./veiculo";

export default class Moto extends Veiculo {
    
    constructor(modelo: string, velocidade: number) {
       super(modelo, velocidade)
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 20
    }

}