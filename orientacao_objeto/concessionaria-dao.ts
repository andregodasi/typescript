import { DaoInterface } from "./dao-interface";
import Concessionaria from "./concessionaria";

export class ConcessionariaDao implements DaoInterface {
    nomeTabela: string = ''

    inserir(concessionaria: Concessionaria): boolean {
        console.log('lógica inserir')
        return true
    }
    atualizar(concessionaria: Concessionaria): boolean {
        console.log('lógica inserir')
        return true
    }
    remover(id: number): Concessionaria {
        console.log('lógica inserir')
        return new Concessionaria('', [])
    }
    selecionar(id: number): Concessionaria {
        console.log('lógica inserir')
        return new Concessionaria('', [])
    }

    selecionarTodos(): Concessionaria[] {
        console.log('lógica inserir')
        return []
    }
}