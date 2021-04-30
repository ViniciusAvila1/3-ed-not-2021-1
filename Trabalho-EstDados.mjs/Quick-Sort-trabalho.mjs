let comparacoes, trocas, passadas

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) {
    if(fim > ini) { // Deve ter mais de um elemento para ordenar
        passadas++
        let pivot = fim
        let div = ini - 1
        // for do primeiro ao Penúltimo
        for(let i = ini; i < fim; i++) {
            if(fnComp(vetor[pivot] < vetor[i])){
                div++
                [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ]
                trocas++
            }
            comparacoes++
        } 
        div++
    // pivô no lugar definitivo
    if(fnComp(vetor[div] < vetor[pivot])){
        [ vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot] ]
        trocas++
    }
    comparacoes++
    // quickSort à esquerda
    quickSort(vetor, fnComp, ini, div - 1)

    // quickSort à direita
    quickSort(vetor, fnComp, div + 1, fim)
   }
}

import { gastos } from './includes/cota-parlamentar-8.5-mil.mjs'

trocas = 0, passadas = 0, comparacoes = 0

console.time('Ordenando gastos...')

// Ordenação por partido
// por nome_parlamentar 
// por id_documento
quickSort(gastos, (nao, sim) => {
    if(nao.partido === sim.partido) { // uf igual
        // cargo igual, 
        // diferença no numero do candidato
        if(nao.nome_parlamentar == sim.nome_parlamentar)
            return nao.id_documento > sim.id_documento
        // UF igual
        // cargo diferente
        else return nao.nome_parlamentar > sim.nome_parlamentar
    }
    // UF diferente
    else return nao.partido > sim.partido
})

let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenando gastos...')
console.log('DEPOIS: ', gastos)
console.log({trocas, passadas, comparacoes, memoria})