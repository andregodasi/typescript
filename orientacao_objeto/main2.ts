import { ConcessionariaDao } from "./concessionaria-dao";
import Concessionaria from "./concessionaria";

let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria('', [])

dao.inserir(concessionaria)