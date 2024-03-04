/*Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:
o "Aprovado", se a média alcançada for maior ou igual a sete;
o "Reprovado", se a média for menor do que sete;
o "Aprovado com Distinção", se a média for igual a dez.
**/

import { calcular_situação, getnumber } from "./functions/io_utils.js";

function main(){
    const nota1 = getnumber("Insira sua primera nota: ")
    const nota2 = getnumber ("Insira sua segunda nota: ")
    const media = (nota1 + nota2) / 2
    calcular_situação (nota1, nota2, media)
}

main()