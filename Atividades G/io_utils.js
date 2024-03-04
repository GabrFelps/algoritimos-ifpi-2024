import { question } from "readline-sync";

export function getnumber (msg){
    return Number(question(msg))
}

export function print (mensagem){
    console.log (mensagem)
}

export function retornarmagnitude (numero){
    if (numero >= 0){
        print (`o ${numero} é positivo`)
    } else {
        print (`o ${numero} é negativo`)
    }
}

export function retornarsexo (letra){
    if (letra == "F" || letra == "f"){
        print("F - Feminino")
    } else if (letra == "M" || letra =="m"){
        print("M - Masculino")
    } else {
        print("Sexo Invalido") 
    }
}

export function vogalouconsoante (letra){
    if (letra == "A" || letra == "a" ||
        letra == "E" || letra == "e" || 
        letra == "I" || letra == "i" ||
        letra == "O" || letra == "o" ||
        letra == "U" || letra == "u"  ){
            print (`${letra} é Vogal`)
        } else {
            print(`${letra} é Consoante`)
        }
    
}

export function calcular_situação (nota1, nota2, media){
    let situacao = ""
    if (media >= 7 & media < 10){
        situacao = "APROVADO"
        print (`
        Nota 1: ${nota1}
        Nota 2: ${nota2}
        --------------
        Média: ${media}
        Situação: ${situacao}
        `)
    } else if (media === 10){
        situacao =  "APROVADO COM DISTINÇÃO"
        print (`
        Nota 1: ${nota1}
        Nota 2: ${nota2}
        ----------------------
        Média: ${media}
        Situação: ${situacao}
        `)
    } else {
        situacao = "REPROVADO"
        print (`
        Nota 1: ${nota1}
        Nota 2: ${nota2}
        --------------
        Média: ${media}
        Situação: ${situacao}
        `)
    }
    
}

export function retornarescolha (produto_1, produto_2, produto_3){
    if (produto_1 < produto_2 & produto_1 < produto_3){
        print (`O Produto 1 custa R$${produto_1} e deve ser comprado`)
    } else if (produto_2 < produto_1 & produto_2 < produto_3){
        print (`O Produto 2 custa R$${produto_2} e deve ser comprado`)
    } else if (produto_3 < produto_1 & produto_3 < produto_2){
        print (`O Produto 3 custa R$${produto_3} e deve ser comprado`)
    }
}

export function retornarsaudacao (letra){
    if (letra == "M" || letra == "m"){
        print("Bom Dia!")
    } else if (letra == "V" || letra =="v"){
        print("Boa Tarde!")
    } else if (letra == "N" || letra == "n"){
        print ("Boa Noite!")
    } else {
        print("Valor Invalido!") 
    }
}

export function calcularaumento (salarioatual){
    let salarioaumentado = 0
    if (salarioatual <= 280){
        salarioaumentado = salarioatual * 1.20
        print (`
        - Seu salário atual: ${salarioatual}
        - Seu aumento é de 20%
        - Seu novo salário é: ${salarioaumentado}
        `)
    } else if (salarioatual > 280 & salarioatual <= 700){
        salarioaumentado = salarioatual * 1.15
        print (`
        - Seu salário atual: ${salarioatual}
        - Seu aumento é de 15%
        - Seu novo salário é: ${salarioaumentado}
        `)
    } else if (salarioatual > 700 & salarioatual <= 1500){
        salarioaumentado = salarioatual * 1.10
        print (`
        - Seu salário atual: ${salarioatual}
        - Seu aumento é de 10%
        - Seu novo salário é: ${salarioaumentado}
        `)
    } else if (salarioatual > 1500){
        salarioaumentado = salarioatual * 1.05
        print (`
        - Seu salário atual: ${salarioatual}
        - Seu aumento é de 5%
        - Seu novo salário é: ${salarioaumentado}
        `)
    }
}


export function calcular_roubo_do_governo (valor_hora, horas_trabalhadas, salario_bruto, sindicato, FGTS){
    let calculoIR = 0
    let calculosind = 0
    let calculoFGTS = 0
    let salario_liquido = 0
    let total_desconto = 0

    if (salario_bruto <= 900){
        calculosind = salario_bruto * sindicato
        calculoFGTS = salario_bruto * FGTS
        calculoIR = salario_bruto * 0
        salario_liquido = (salario_bruto - calculosind) - calculoIR 
        total_desconto = calculoIR + calculosind

        print (`
        (${valor_hora} * ${horas_trabalhadas}) : R$ ${salario_bruto}
        (-) Sindicado (3%) : ${calculosind.toFixed(2)}
        (-) IR (ISENTO -> 0%) : R$ ${calculoIR.toFixed(2)}
        FGTS (11%) : R$ ${calculoFGTS.toFixed(2)}
        Total de descontos : ${total_desconto.toFixed(2)}
        Salário Liquido : ${salario_liquido.toFixed(2)}
        `)
    } else if (salario_bruto > 900 & salario_bruto <= 1500){
        calculosind = salario_bruto * sindicato
        calculoFGTS = salario_bruto * FGTS
        calculoIR = salario_bruto * 0.05
        salario_liquido = (salario_bruto - calculosind) - calculoIR 
        total_desconto = calculoIR + calculosind

        print (`
        (${valor_hora} * ${horas_trabalhadas}) : R$ ${salario_bruto}
        (-) Sindicado (3%) : ${calculosind.toFixed(2)}
        (-) IR (5%) : R$ ${calculoIR.toFixed(2)}
        FGTS (11%) : R$ ${calculoFGTS.toFixed(2)}
        Total de descontos : ${total_desconto.toFixed(2)}
        Salário Liquido : ${salario_liquido.toFixed(2)}
        `)
    } else if (salario_bruto > 1500 & salario_bruto <= 2500){
        calculosind = salario_bruto * sindicato
        calculoFGTS = salario_bruto * FGTS
        calculoIR = salario_bruto * 0.10
        salario_liquido = (salario_bruto - calculosind) - calculoIR 
        total_desconto = calculoIR + calculosind

        print (`
        (${valor_hora} * ${horas_trabalhadas}) : R$ ${salario_bruto}
        (-) Sindicado (3%) : ${calculosind.toFixed(2)}
        (-) IR (10%) : R$ ${calculoIR.toFixed(2)}
        FGTS (11%) : R$ ${calculoFGTS.toFixed(2)}
        Total de descontos : ${total_desconto.toFixed(2)}
        Salário Liquido : ${salario_liquido.toFixed(2)}
        `)
    } else if (salario_bruto > 2500){
        calculosind = salario_bruto * sindicato
        calculoFGTS = salario_bruto * FGTS
        calculoIR = salario_bruto * 0.20
        salario_liquido = (salario_bruto - calculosind) - calculoIR 
        total_desconto = calculoIR + calculosind

        print (`
        (${valor_hora} * ${horas_trabalhadas}) : R$ ${salario_bruto}
        (-) Sindicado (3%) : ${calculosind.toFixed(2)}
        (-) IR (20%) : R$ ${calculoIR.toFixed(2)}
        FGTS (11%) : R$ ${calculoFGTS.toFixed(2)}
        Total de descontos : ${total_desconto.toFixed(2)}
        Salário Liquido : ${salario_liquido.toFixed(2)}
        `)

    }
}

export function retornar_dia_da_semana (numero){
    if (numero === 1){
        print ("Domingo")
    } else if (numero === 2){
        print ("Segunda")
    } else if (numero === 3){
        print ("Terça")
    } else if (numero === 4){
        print ("Quarta")
    } else if (numero === 5){
        print ("Quinta")
    } else if (numero === 6){
        print ("Sexta")
    } else if (numero === 7){
        print ("Sábado")
    } else {
        print ("Número Inválido")
    }
}

export function retornarsituacaoeconceito (nota1, nota2, media){
    let conceito = ""
    let situacao = ""

    if (media > 9 & media <=10 ) {
        conceito = "A"
        situacao = "APROVADO"
        print (`
        Nota 1: ${nota1}
        Nota 2: ${nota2}
        Média: ${media}
        Situação: ${situacao}
        Conceito: ${conceito}
        `)
    } else if (media > 7.5 & media <=9 ) {
        conceito = "B"
        situacao = "APROVADO"
        print (`
        Nota 1: ${nota1}
        Nota 2: ${nota2}
        Média: ${media}
        Situação: ${situacao}
        Conceito: ${conceito}
        `)
    } else if (media > 6 & media <=7.5 ) {
        conceito = "C"
        situacao = "APROVADO"
        print (`
        Nota 1: ${nota1}
        Nota 2: ${nota2}
        Média: ${media}
        Situação: ${situacao}
        Conceito: ${conceito}
        `)
    } else if (media > 4 & media <=6 ) {
        conceito = "D"
        situacao = "REPROVADO"
        print (`
        Nota 1: ${nota1}
        Nota 2: ${nota2}
        Média: ${media}
        Situação: ${situacao}
        Conceito: ${conceito}
        `)
    } else if (media >= 0 & media <=4 ) {
        conceito = "E"
        situacao = "REPROVADO"
        print (`
        Nota 1: ${nota1}
        Nota 2: ${nota2}
        Média: ${media}
        Situação: ${situacao}
        Conceito: ${conceito}
        `)
    }

}

export function calcular_com_centena(numero){
    let C = Math.floor (numero / 100)
    let Resto = numero % 100
    let D = Math.floor (Resto / 10) 
    let U = Resto % 10

    print (`${numero} = ${C} centena(s), ${D} dezena(s) e ${U} unidade(s)`)

}

export function calcular_com_dezena(numero) {
    let D2 = Math.floor (numero / 10)
    let U2 = numero % 10
    
    print (`${numero} = ${D2} dezena(s) e ${U2} unidade(s)`)
}

export function verificar_inteiro_ou_decimal (numero){
    if (numero % 1 > 0){
        print (`${numero} é decimal`)
    } else {
        print (`${numero} é inteiro`)
    }
}

export function retornarclassificacao (pergunta1, pergunta2, pergunta3, pergunta4, pergunta5){
    let x1 = 0
    let x2 = 0
    let x3 = 0
    let x4 = 0
    let x5 = 0
    let soma = 0
    if (pergunta1 == "SIM" || pergunta1 == "sim"){
        x1 = 1
    }
    if (pergunta2 == "SIM" || pergunta2 == "sim"){
        x2 = 1
    }
    if (pergunta3 == "SIM" || pergunta3 == "sim"){
        x3 = 1
    }
    if (pergunta4 == "SIM" || pergunta4 == "sim"){
        x4 = 1
    }
    if (pergunta5 == "SIM" || pergunta5 == "sim"){
        x5 = 1
    }

    soma = x1 + x2 + x3 + x4 + x5 

    if (soma === 2){
        print ("Suspeita")
    } else if (soma === 3 || soma === 4){
        print ("Cumplice")
    } else if (soma === 5){
        print ("Assasino")
    } else {
        print ("Inocente")
    }
}

export function valor_a_ser_pago (qnt_morango, qnt_apple){
    let kg_morango = 0
    let resultadom = 0
    let resultadoa = 0
    let kg_apple = 0

    if (qnt_morango <= 5){
        kg_morango = 2.50
        resultadom = qnt_morango * kg_morango
        print (`O valor dos morangos é R$ ${resultadom.toFixed(2)}`)

    } else if (qnt_morango > 5 & qnt_morango <= 8){
        kg_morango = 2.20
        resultadom = qnt_morango * kg_morango
        print (`O valor dos morangos é R$ ${resultadom.toFixed(2)}`)

    } else if (qnt_morango > 8){
        kg_morango = 2.20
        resultadom = qnt_morango * kg_morango * 0.90
        print (`O valor dos morangos, com desconto (10%) é R$${resultadom.toFixed(2)}`)

    }

    if (qnt_apple <= 5){
        kg_apple = 1.80
        resultadoa = qnt_apple * kg_apple
        print (`O valor das maçãs é R$${resultadoa.toFixed(2)}`)

    } else if (qnt_apple > 5 & qnt_apple <= 8){
        kg_apple = 1.50
        resultadoa = qnt_apple * kg_apple
        print (`O valor das maçãs é R$${resultadoa.toFixed(2)}`)

    } else if (qnt_morango > 8){
        kg_apple = 1.50
        resultadoa = qnt_apple * kg_apple * 0.90
        print (`O valor das maçãs, com desconto (10%) é R$${resultadoa.toFixed(2)}`)

    }

    let resultadofinal = resultadoa + resultadom

    print(`----------------------------------------------------`)

    if (resultadofinal >= 25 & qnt_morango <= 8 & qnt_apple <=8 ){
        resultadofinal = resultadofinal * 0.9
        print(`O valor total, com desconto (10%), fica: ${resultadofinal.toFixed(2)}`)
    } else {
        print(`O valor total, fica: ${resultadofinal.toFixed(2)}`)
    }

}

export function calcular_desconto_alcool (numero_de_litros, l_gasolina, l_alcool, tipo_de_combustivel){
    let desconto = 0
    let vtotal_alcool =  l_alcool * numero_de_litros

    if (numero_de_litros <= 20){
        desconto = vtotal_alcool - ((l_alcool * 0.03) * numero_de_litros) 
        print (`
        Tipo de combustível: ${tipo_de_combustivel}
        Valor sem desconto: ${vtotal_alcool}
        Valor com desconto: ${desconto}
        `)
    } else if (numero_de_litros > 20){
        desconto = vtotal_alcool - (l_alcool * 0.05) * numero_de_litros
        print (`
        Tipo de combustível: ${tipo_de_combustivel}
        Valor sem desconto: ${vtotal_alcool}
        Valor com desconto: ${desconto}
        `)
    }
}

export function calcular_desconto_gasolina (numero_de_litros, l_gasolina, l_alcool, tipo_de_combustivel){
    let descontogas = 0
    let vtotal_gasolina = l_gasolina * numero_de_litros

    if (numero_de_litros <= 20){
        descontogas = vtotal_gasolina - (l_alcool * 0.04) * numero_de_litros

        print (`
        Tipo de combustível: ${tipo_de_combustivel}
        Valor sem desconto: ${vtotal_gasolina}
        Valor com desconto: ${descontogas}
        `)
    } else if (numero_de_litros > 20){
        descontogas = vtotal_gasolina - (l_alcool * 0.06) * numero_de_litros

        print (`
        Tipo de combustível: ${tipo_de_combustivel}
        Valor sem desconto: ${vtotal_gasolina}
        Valor com desconto: ${descontogas}
        `)
    }
}

export function retornar_cupom_fiscal (opção_carne, qntd_carne, cartão){
    let valor = 0
    let valor_a_ser_pago = 0

    if(opção_carne == "F" & qntd_carne <= 5 & cartão == "sim"){
        valor= qntd_carne * 4.90
        valor_a_ser_pago = valor * 0.95
        print(`
      > CUPOM FISCAL:
        Item:      Cod:     Desc:                          Valor:
        File       F        File ${qntd_carne}Kg x 4,90               ${valor.toFixed(2)}
        -----------------------------------------------------------------
        Valor total: ${valor.toFixed(2)}
        Forma de pagamento: RogerioCard
        Desconto: 5%
        TOTAL: ${valor_a_ser_pago.toFixed(2)}
        `)

    } else if(opção_carne == "F" & qntd_carne <= 5 & cartão == "nao"){
        valor = qntd_carne * 4.90
        valor_a_ser_pago = valor
        print(`
      > CUPOM FISCAL:
        Item:      Cod:     Desc:                          Valor:
        File       F        File ${qntd_carne}Kg x 4,90               ${valor.toFixed(2)}
        -----------------------------------------------------------------
        Valor total: ${valor.toFixed(2)}
        Forma de pagamento: Especie
        Desconto: 0%
        TOTAL: ${valor_a_ser_pago.toFixed(2)}
        `)

    } else if(opção_carne == "F" & qntd_carne > 5 & cartão == "sim"){
        valor = qntd_carne * 5.80
        valor_a_ser_pago = valor * 0.95
        print(`
      > CUPOM FISCAL:
        Item:      Cod:     Desc:                          Valor:
        File       F        File ${qntd_carne}Kg x 5,80               ${valor.toFixed(2)}
        -----------------------------------------------------------------
        Valor total: ${valor.toFixed(2)}
        Forma de pagamento: RogerioCard
        Desconto: 5%
        TOTAL: ${valor_a_ser_pago.toFixed(2)}
        `)

    } else if(opção_carne == "F" & qntd_carne > 5 & cartão == "nao"){
        valor = qntd_carne * 5.80
        valor_a_ser_pago = valor
        print(`
      > CUPOM FISCAL:
        Item:      Cod:     Desc:                          Valor:
        File       F        File ${qntd_carne}Kg x 5,80               ${valor.toFixed(2)}
        -----------------------------------------------------------------
        Valor total: ${valor.toFixed(2)}
        Forma de pagamento: especie
        Desconto: 0%
        TOTAL: ${valor_a_ser_pago.toFixed(2)}
        `)

    } else if(opção_carne == "A" & qntd_carne <= 5 & cartão == "sim"){
        valor = qntd_carne * 5.90
        valor_a_ser_pago = valor * 0.95
        print(`
      > CUPOM FISCAL:
        Item:      Cod:     Desc:                          Valor:
        Alcatra    A        Alcatra ${qntd_carne}Kg x 5,90            ${valor.toFixed(2)}
        -----------------------------------------------------------------
        Valor total: ${valor.toFixed(2)}
        Forma de pagamento: RogerioCard
        Desconto: 5%
        TOTAL: ${valor_a_ser_pago.toFixed(2)}
        `)

    } else if(opção_carne == "A" & qntd_carne <= 5 & cartão == "nao"){
        valor = qntd_carne * 5.90
        valor_a_ser_pago = valor
        print(`
      > CUPOM FISCAL:
        Item:      Cod:     Desc:                          Valor:
        Alcatra    A        Alcatra ${qntd_carne}Kg x 5,90            ${valor.toFixed(2)}
        -----------------------------------------------------------------
        Valor total: ${valor.toFixed(2)}
        Forma de pagamento: especie
        Desconto: 0%
        TOTAL: ${valor_a_ser_pago.toFixed(2)}
        `)

    } else if(opção_carne == "A" & qntd_carne > 5 & cartão == "sim"){
        valor = qntd_carne * 6.80
        valor_a_ser_pago = valor * 0.95
        print(`
      > CUPOM FISCAL:
        Item:      Cod:     Desc:                          Valor:
        Alcatra    A        Alcatra ${qntd_carne}Kg x 5,80            ${valor.toFixed(2)}
        -----------------------------------------------------------------
        Valor total: ${valor.toFixed(2)}
        Forma de pagamento: RogerioCard
        Desconto: 5%
        TOTAL: ${valor_a_ser_pago.toFixed(2)}
        `)

    } else if(opção_carne == "A" & qntd_carne > 5 & cartão == "nao"){
        valor = qntd_carne * 6.80
        valor_a_ser_pago = valor
        print(`
      > CUPOM FISCAL:
        Item:      Cod:     Desc:                          Valor:
        Alcatra    A        Alcatra ${qntd_carne}Kg x 5,80            ${valor.toFixed(2)}
        -----------------------------------------------------------------
        Valor total: ${valor.toFixed(2)}
        Forma de pagamento: especie
        Desconto: 0%
        TOTAL: ${valor_a_ser_pago.toFixed(2)}
        `)

    } else if(opção_carne == "P" & qntd_carne <= 5 & cartão == "sim"){
        valor = qntd_carne * 6.90
        valor_a_ser_pago = valor * 0.95
        print(`
      > CUPOM FISCAL:
        Item:      Cod:     Desc:                          Valor:
        Picanha    P        Picanha ${qntd_carne}Kg x 5,90            ${valor.toFixed(2)}
        -----------------------------------------------------------------
        Valor total: ${valor.toFixed(2)}
        Forma de pagamento: RogerioCard
        Desconto: 5%
        TOTAL: ${valor_a_ser_pago.toFixed(2)}
        `)

    } else if(opção_carne == "P" & qntd_carne <= 5 & cartão == "nao"){
        valor = qntd_carne * 6.90
        valor_a_ser_pago = valor
        print(`
      > CUPOM FISCAL:
        Item:      Cod:     Desc:                          Valor:
        Picanha    P        Picanha ${qntd_carne}Kg x 5,90            ${valor.toFixed(2)}
        -----------------------------------------------------------------
        Valor total: ${valor.toFixed(2)}
        Forma de pagamento: especie
        Desconto: 0%
        TOTAL: ${valor_a_ser_pago.toFixed(2)}
        `)

    } else if(opção_carne == "P" & qntd_carne > 5 & cartão == "sim"){
        valor = qntd_carne * 7.80
        valor_a_ser_pago = valor * 0.95
        print(`
      > CUPOM FISCAL:
        Item:      Cod:     Desc:                          Valor:
        Picanha    P        Picanha ${qntd_carne}Kg x 5,80            ${valor.toFixed(2)}
        -----------------------------------------------------------------
        Valor total: ${valor.toFixed(2)}
        Forma de pagamento: RogerioCard
        Desconto: 5%
        TOTAL: ${valor_a_ser_pago.toFixed(2)}
        `)

    } else if(opção_carne == "P" & qntd_carne > 5 & cartão == "nao"){
        valor = qntd_carne * 7.80
        valor_a_ser_pago = valor
        print(`
      > CUPOM FISCAL:
        Item:      Cod:     Desc:                          Valor:
        Picanha    P        Picanha ${qntd_carne}Kg x 5,80            ${valor.toFixed(2)}
        -----------------------------------------------------------------
        Valor total: ${valor.toFixed(2)}
        Forma de pagamento: especie
        Desconto: 0%
        TOTAL: ${valor_a_ser_pago.toFixed(2)}
        `)

    }
}
