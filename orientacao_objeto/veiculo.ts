export default class Veiculo {
    private modelo: string
    private velocidade: number = 0

    constructor(modelo: string, velocidade: number) {
        this.modelo = modelo
        this.velocidade = velocidade
    }
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }

}