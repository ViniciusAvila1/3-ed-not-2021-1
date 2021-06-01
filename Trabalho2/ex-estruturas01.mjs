/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Stack } from './Stack-Base.mjs'

const numeroDec = 2703

let armaz = numeroDec

const restop2 = new Stack()

while(armaz > 0) {
    restop2.push(armaz % 2) // Mod 2
    armaz = Math.floor(armaz / 2) // Aproxima pra baixo
}

console.log(restop2.print())

let numeroBin = ''

while(! restop2.empty) {
    numeroBin += restop2.pop()
}

console.log(`O número ${numeroDec} na base 10 é igual a ${numeroBin} na base 2.`)