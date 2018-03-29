import Concessionaria from "./concessionaria";
import { Dao } from "./dao";
import Pessoa from "./pessoa";
import Carro from "./carro";

let dao: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao1: Dao<Pessoa> = new Dao<Pessoa>()

dao.inserir(new Concessionaria('tes', []))
dao1.inserir(new Pessoa('', '', new Carro('', 0, 0)))