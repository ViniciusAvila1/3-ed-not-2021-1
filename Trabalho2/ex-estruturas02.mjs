/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Deck } from './Deck-base.mjs'

let deck = new Deck()

const pali = 'anotaram a data da maratona' // Palindromo

for(let i = 0; i < pali.length; i++) {
    deck.insertBack(pali.charAt(i))
}

console.log(deck.print()) //Mostrar

let inv = ''

while(! deck.empty) { // no final 
    inv += deck.removeBack()
}
console.log(inv)