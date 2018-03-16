/**
 * No typescript existe a inferencia de tipos, que nada mas é que 
 * atribuir um tipo para uma variavel.
 * essa feature possibilita que o transpilador lance erros em tempo de execução, assim fazendo
 * os erros diminuirem. pois ele verifica se as variaveis estão com as inferencias corretas.
 */

 let varString: string
 let varNumber: number
 let varBoolean: boolean

 //como inferimos tipos o typescript não deixa fazer alteracao no tipo

 varString = 'variavel string'
 //varString = 233; <= console lancara um erro de inferencia negada, essa consecutivamente