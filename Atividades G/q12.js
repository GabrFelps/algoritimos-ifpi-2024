//Leia um número e escreva se o número é inteiro ou decimal.
// divide u numero por 1 e se o resto > 0 é decimal, senao é inteiro

import { getnumber, verificar_inteiro_ou_decimal } from "./functions/io_utils.js"

function main(){
    const numero = getnumber("Digite um número: ")

    verificar_inteiro_ou_decimal (numero)
}

main()