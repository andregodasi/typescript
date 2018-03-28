import Carro from './carro'
import Pessoa from './pessoa'
import Concessionaria from './concessionaria'

/* --- criar carros ---*/
let carroA = new Carro('dodge journey', 4, 0)
let carroB = new Carro('veloster', 3, 0)
let carroC = new Carro('fusca', 2, 0)

/* --- montar a lista de carros da concessionaria ---*/
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* --- exibir a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros())

/* --- comprar o carro ---*/
let cliente = new Pessoa('João', 'fusca', new Carro('Chevete', 2, 0))

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {

        //compra o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarro())