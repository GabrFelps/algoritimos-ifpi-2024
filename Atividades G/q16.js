/**O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:

         Até 5Kg            Acima de 5Kg
File:    R$ 4,90/Kg          R$ 5,80/Kg
Alcatra: R$ 5,90/Kg          R$ 6,80/Kg
Picanha: R$ 6,90/Kg          R$ 7,80/Kg

Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção,
porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o
cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um programa que peça o tipo
e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da
compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar. */

import { question } from "readline-sync"
import { getnumber, print, retornar_cupom_fiscal } from "./functions/io_utils.js"

function main (){
    print(`
********************FrigorificoIFPI********************
   __________________________________________________
    |   ----------- tabela de preços ----------    |
    |               Até 5Kg           Acima de 5Kg |
    | F - File:    R$ 4,90/Kg          R$ 5,80/Kg  |
    | A - Alcatra: R$ 5,90/Kg          R$ 6,80/Kg  |
    | P - Picanha: R$ 6,90/Kg          R$ 7,80/Kg  |
   _|______________________________________________|_

    Instruções:
    Escolha F, A ou P para suas respectivas carnes

`)

const opção_carne = question("Qual é a carne da sua escolha (F, A ou P)?: ")
const qntd_carne = getnumber("Qual a quantidade (em Kg) escolhida?: ")
const cartão = question("Você possui o cartão RogerioCard?(sim ou nao): ")

retornar_cupom_fiscal (opção_carne, qntd_carne, cartão)

}

main()