/*Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e
escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
**/
import {question} from "readline-sync"
import { retornarsaudacao } from "./functions/io_utils.js"

function main(){
    const letra = question("Digite M, V ou N: ")
    retornarsaudacao (letra)
}

main()