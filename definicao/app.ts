/**
 * 
 * Typescript
 * É um super set do js es6, que tem  implementado es6 e tem mais algumas features
 * como não são todos os navegadores que implementam o es6 o typescript faz
 * uma transpilação para es5 para que todos os navegadores possam executar seu código
 */

 //código typescript es6
let ola = (nome: string) => {
    console.log('Olá ' + nome)
}

ola('andre')