/**Faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
a) "Telefonou para a vítima ?"
b) "Esteve no local do crime ?"
c) "Mora perto da vítima ?"
d) "Devia para a vítima ?"
e) "Já trabalhou com a vítima ?"
O algoritmo deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa
responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como
"Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente". 
*/

import { question } from "readline-sync"
import { print, retornarclassificacao } from "./functions/io_utils.js"

function main(){
    print ("Responda as perguntas com SIM ou NÃO")
    const pergunta1 = question("Telefonou para a vítima ?: ")
    const pergunta2 = question("Esteve no local do crime ?: ")
    const pergunta3 = question("Mora perto da vítima ?: ")
    const pergunta4 = question("Devia para a vítima ?: ")
    const pergunta5 = question("Já trabalhou com a vítima?: ")

    retornarclassificacao (pergunta1, pergunta2, pergunta3, pergunta4, pergunta5)
}

main()
    