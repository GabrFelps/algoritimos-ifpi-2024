//Leia 3 (três) números, verifique e escreva o maior entre os números lidos.
import { question } from "readline-sync"

function main () {
    const num_1 = getnumber("insira o primeiro número: ")
    const num_2 = getnumber("insira o segundo número: ")
    const num_3 = getnumber("insira o terceiro número: ")
    let maior = 0
    let meio = 0
    let menor = 0

    if (num_1 === num_2 && num_3 === num_1){
        print ("todos os números são iguais")

    }else if (num_1 > num_2 > num_3){
        maior = num_1
        meio = num_2
        menor = num_3

        print (`${maior} é maior que ${meio} que é maior que ${menor}`)

    }else if (num_3 > num_2 > num_1){
        maior = num_3 
        meio = num_2
        menor = num_1

        print (`${maior} é maior que ${meio} que é maior que ${menor}`)

    }else if (num_1 > num_3 > num_2){
        maior = num_1
        meio = num_3
        menor = num_2

        print (`${maior} é maior que ${meio} que é maior que ${menor}`)

    }else if (num_3 > num_1 > num_2){
        maior = num_3 
        meio = num_1
        menor = num_2

        print (`${maior} é maior que ${meio} que é maior que ${menor}`)

    }else if (num_2 > num_1 > num_3){
        maior = num_2
        meio = num_1
        menor = num_3

        print (`${maior} é maior que ${meio} que é maior que ${menor}`)

    }else{
        maior = num_2 
        meio = num_3
        menor = num_1

        print (`${maior} é maior que ${meio} que é maior que ${menor}`)
    }
}
function print (mensagem){
    return console.log (mensagem)
}

function getnumber (msg){
    return Number(question(msg))
}

main ()
