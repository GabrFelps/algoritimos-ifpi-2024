/*Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é
sempre pelo mais barato.
**/

import { getnumber, retornarescolha } from "./functions/io_utils.js";

function main(){
    const produto_1 = getnumber("Insira o valor do primeiro produto: ")
    const produto_2 = getnumber("Insira o valor do segundo produto: ")
    const produto_3 = getnumber("Insira o valor do terceiro produto: ")

    retornarescolha(produto_1, produto_2, produto_3)
}

main()