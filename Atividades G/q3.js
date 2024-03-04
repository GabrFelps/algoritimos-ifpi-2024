//Leia uma letra e verifique se a letra digitada é vogal ou consoante.

import { question } from "readline-sync";
import { vogalouconsoante } from "./functions/io_utils.js";

function main(){
    const letra = question("Digite uma letra: ")
    vogalouconsoante (letra)
}

main()