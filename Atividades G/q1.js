//Leia um número e mostre na tela se o número é positivo ou negativo.

import { retornarmagnitude, getnumber } from "./functions/io_utils.js"

function main(){
    const numero = getnumber ("Insira um número positivo ou negativo: ")
    retornarmagnitude (numero)
}

main()