/**14. Um posto está vendendo combustíveis com a seguinte tabela de descontos:
1. Álcool:
· até 20 litros, desconto de 3% por litro
· acima de 20 litros, desconto de 5% por litro
2. Gasolina:
· até 20 litros, desconto de 4% por litro
· acima de 20 litros, desconto de 6% por litro.
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que
o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.
 */

import { question } from "readline-sync"
import { calcular_desconto_alcool, calcular_desconto_gasolina, print } from "./functions/io_utils.js"

function main(){
    print (`
    A-álcool 
    G-gasolina
    `)
    const tipo_de_combustivel = question("Qual é o tipo de combustível? (A ou G): ")
    const numero_de_litros = getnumber("Insira a quantidade de litros vendidos: ")
    const l_gasolina = 2.50
    const l_alcool = 1.90

    if (tipo_de_combustivel == "A" || tipo_de_combustivel == "a"){
        calcular_desconto_alcool (numero_de_litros, l_gasolina, l_alcool, tipo_de_combustivel)
            
    } else if (tipo_de_combustivel == "G" || tipo_de_combustivel == "g"){
        calcular_desconto_gasolina (numero_de_litros, l_gasolina, l_alcool, tipo_de_combustivel)

    } else {
        print (`${tipo_de_combustivel} é Inválido`)
    }
    
}

main()