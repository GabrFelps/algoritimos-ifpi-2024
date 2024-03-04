/**Uma fruteira está vendendo frutas com a seguinte tabela de preços:
        Até 5Kg        Acima de 5 Kg
Morango R$ 2,50/Kg     R$ 2,20/Kg
Maçã    R$ 1,80/Kg     R$ 1,50/Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
 */


import { getnumber, print, valor_a_ser_pago } from "./functions/io_utils.js";

function main(){
    print(`
   ****************FeirinhaIFPI***************
   ___________________________________________
    |  --------- tabela de preços --------- |
    |         Até 5Kg        Acima de 5Kg   |
    | Morango R$ 2,50/Kg     R$ 2,20/Kg     |
    | Maçã    R$ 1,80/Kg     R$ 1,50/Kg     |
   _|_______________________________________|_
    `)
    const qnt_morango = getnumber ("Qual a quantidade (em Kg) de morango desejada?: ")
    const qnt_apple = getnumber ("Qual a quantidade (em Kg) de maçãs desejada?: ")

    print(`
    `)

    valor_a_ser_pago (qnt_morango, qnt_apple)
    
}

main()