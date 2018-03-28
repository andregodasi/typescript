import Carro  from './carro'

export default class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: Carro

    constructor (nome: string, carroPreferido: string, carro: Carro) {
        this.nome = nome
        this.carroPreferido = carroPreferido
        this.carro = carro
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public dizerCarro(): Carro {
        return this.carro
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }

}