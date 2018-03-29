import { DaoInterface } from "./dao-interface";
import Pessoa from "./pessoa";
import Carro from "./carro";

export class PessoaDao implements DaoInterface {
    nomeTabela: string = ''

    inserir(pessoa: Pessoa): boolean {
        console.log('lógica inserir')
        return true
    }
    atualizar(pessoa: Pessoa): boolean {
        console.log('lógica inserir')
        return true
    }
    remover(id: number): Pessoa {
        console.log('lógica inserir')
        return new Pessoa('', '', new Carro('',0 , 0))
    }
    selecionar(id: number): Pessoa {
        console.log('lógica inserir')
        return new Pessoa('', '', new Carro('',0 , 0))
    }

    selecionarTodos(): Pessoa[] {
        console.log('lógica inserir')
        return []
    }
}