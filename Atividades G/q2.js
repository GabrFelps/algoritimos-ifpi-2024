//Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.


import {question} from "readline-sync"
import { retornarsexo } from "./functions/io_utils.js"

function main(){
    const letra = question("Digite F ou M: ")
    retornarsexo (letra)
}

main()