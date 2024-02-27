/*Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos).
**/

import {question} from "readline-sync"

function main (){
    const dia = getnumber ("Digite o dia atual: ")
    const mes = getnumber ("Digite o mês atual: ")
    const ano = getnumber ("Digite o ano atual: ")

    const dianas = getnumber ("Digite o dia de nascimento: ")
    const mesnas = getnumber ("Digite o mes de nascimento: ")
    const anonas = getnumber ("Digite o ano de nascimento: ")

    if (dia === dianas && mes === mesnas){
        var anocomp = ano - anonas 
        print (`Você tem ${anocomp} anos.`)
    } else if (dianas < dia && mesnas > mes){
        let dty1 = (dia - dianas) / 365
        let mty1 = (mesnas - mes) / 12
        let y1 = (ano - anonas) - 1
        let p1 = dty1 + mty1 + y1 
        print (`Você tem ${p1} anos`)
    }
    
}

function print (mensagem){
    return console.log (mensagem)
}

function getnumber (msg){
    return Number(question(msg))
}

main()