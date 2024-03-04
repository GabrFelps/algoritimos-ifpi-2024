/**Leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do
número. Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplos:
o 326 = 3 centenas, 2 dezenas e 6 unidades
o 12 = 1 dezena e 2 unidades 
*/

import { calcular_com_centena, calcular_com_dezena, getnumber, print } from "./functions/io_utils.js"

function main(){
    const numero = getnumber("Digite um número menor que 1000: ")

    if (numero >= 1000){
        print ("NUMERO INVALIDO")
    } else if (numero >= 100){
        calcular_com_centena (numero)
    } else {
        calcular_com_dezena (numero)
    }
    
}

main()
