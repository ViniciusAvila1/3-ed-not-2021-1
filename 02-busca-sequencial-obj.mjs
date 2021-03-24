function buscaSequencial(vetor, valorBusca, fnComp){
    // Percurso com for tradicional
    for(let i = 0; i < vetor.length; i++){
        // Encontrado o valor de busca, retorna-se a posição onde foi encontrado
        // fnComp representa a chamada à função externa 
        //if(vetor[i] === valorBusca) return i
        if(fnComp(vetor[i], valorBusca)) return i
    }
    // Retorna-se -1 caso o valor de busca não tenha sido encontrado
    return -1
}

// Recebe apeas um objeto de nome e retorna true caso a propriedade first_name seja idêntica ao valor de busca
/*function comparaNome(objNome, valorBusca) {
    return objNome.first_name === valorBusca
}
*/
const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.time('Buscando ZILMAR')
console.log(buscaSequencial(objNomes, 'ZILMAR', comparaNome))
console.timeEnd('Buscando ZILMAR')

console.time('Buscando KATIUSCIA')
console.log(buscaSequencial(objNomes, 'KATIUSCIA', (objNome, valorBusca) => objNome.first_name === valorBusca))
console.timeEnd('Buscando KATIUSCIA')

console.time('Buscando ABRAAO')
console.log(buscaSequencial(objNomes, 'ABRAAO', (objNome, valorBusca) => objNome.first_name === valorBusca))
console.timeEnd('Buscando ABRAAO')

console.time('Buscando group_name ABRAAO')
console.log(buscaSequencial(objNomes, 'ABRAAO', (objNome, valorBusca) => objNome.group_name === valorBusca))
console.timeEnd('Buscando group_name ABRAAO')

console.time('Buscando nome ABRAAO')
let posEncontrado = buscaSequencial(objNomes, 'ABRAAO', (objNome, valorBusca) => objNome.first_name === valorBusca)
console.timeEnd('Buscando nome ABRAAO')

console.log(objNomes[posEncontrado])