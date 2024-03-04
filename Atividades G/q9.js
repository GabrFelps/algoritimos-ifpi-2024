/*Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro
valor deve aparecer valor inválido.
**/

import { getnumber, print, retornar_dia_da_semana } from "./functions/io_utils.js";

function main(){
    const numero = getnumber("> Insira um número de 1 a 7: ")
    retornar_dia_da_semana (numero)
}

main()