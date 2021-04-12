let totTrocas, comparacoes, passadas

function bubbleSort(vetor, fnComp) {
    totTrocas = 0, comparacoes = 0, passadas = 0
    let trocas
    do{
        trocas = 0 // Início de uma nova passada
        passadas++

        // Percurso do vetor do início até o PENÚLTIMO elemento
        for(let i = 0; i <= vetor.length - 2; i++) {
            if (fnComp(vetor[i], vetor[i + 1])) {
                // desestruturação
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]
                trocas++
            }
            comparacoes++
        }
        totTrocas += trocas
    } while(trocas > 0)
}

import { gastos } from './includes/cota-parlamentar-282-mil.mjs'

console.time('Ordenando gastos...')

// Ordenação por partido
// por nome_parlamentar 
// por id_documento
bubbleSort(gastos, (a, b) => {
    // uf iguais
    if(a.partido === b.partido) { 
        // cargo igual, 
        // diferença no numero do candidato
        if(a.nome_parlamentar === b.nome_parlamentar) return a.id_documento > b.id_documento
        // UF igual
        // cargo diferente
        else return a.nome_parlamentar > b.nome_parlamentar
    }
    // UF diferente
    else return a.partido > b.partido
})

let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenando gastos...')
console.log('DEPOIS: ', gastos)
console.log({totTrocas, passadas, comparacoes, memoria})