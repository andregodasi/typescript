import { DaoInterface } from "./dao-interface";
import Pessoa from "./pessoa";
import Carro from "./carro";

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = ''

    inserir(object: T): boolean {
        console.log('lógica inserir')
        return true
    }
    atualizar(object: T): boolean {
        console.log('lógica inserir')
        return true
    }
    remover(id: number): T {
        console.log('lógica inserir')
        return Object()
    }
    selecionar(id: number): T {
        console.log('lógica inserir')
        return Object()
    }

    selecionarTodos(): T[] {
        console.log('lógica inserir')
        return []
    }
}