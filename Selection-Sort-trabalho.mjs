let trocas, passadas, comparacoes

function selectionSort(vetor, fnComp) {

    trocas = 0, passadas = 0, comparacoes = 0

    function encontrarMenor(inicio) {
        let menor = inicio
        // Este loop vai até a última posição
        for(let j = inicio + 1; j < vetor.length; j++) {
            //if(vetor[j] < vetor[menor]) menor = j
            // Na passadasagem para função de comparação, a ordem dos
            // objetos precisa ser invertida
            if(fnComp(vetor[menor], vetor[j])) menor = j
            comparacoes++
        }
        return menor
    }

    // Percurso do vetor até a PENÚLTIMA posição
    for(let i = 0; i <= vetor.length - 2; i++) {
        passadas++
        let menor = encontrarMenor(i + 1)
        
        //if(vetor[menor] < vetor[i]) {
        // Parâmetros em ordem invertida
        if(fnComp(vetor[i], vetor[menor])) {
            [ vetor[menor], vetor[i] ] = [ vetor[i], vetor[menor] ]
            trocas++
        }
        comparacoes++
    }
}

import { gastos } from './includes/cota-parlamentar-8.5-mil.mjs'

console.time('Ordenando gastos...')

// Ordenação por partido
// por nome_parlamentar 
// por id_documento
selectionSort(gastos, (lula, bolsonaro) => {
    if(lula.partido === bolsonaro.partido) { // uf iguais
        // cargo igual, 
        // diferença no numero do candidato
        if(lula.nome_parlamentar === bolsonaro.nome_parlamentar) return lula.id_documento > bolsonaro.id_documento
        // UF igual
        // cargo diferente
        else return lula.nome_parlamentar > bolsonaro.nome_parlamentar
    }
    // UF diferente
    else return lula.partido > bolsonaro.partido
})

let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenando gastos...')
console.log('DEPOIS: ', gastos)
console.log({trocas, passadas, comparacoes, memoria})