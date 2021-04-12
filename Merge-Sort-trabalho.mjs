let comparacoes, divisoes, juncoes

function mergeSort(vetor, fnComp) {
    
    function mesclar(vetEsq, vetDir) {
        let EsqVetor = 0, DirVetor = 0, vetRes = []
        while(EsqVetor < vetEsq.length && DirVetor < vetDir.length) {
            if(fnComp(vetDir[DirVetor], vetEsq[EsqVetor])) {    // Parâmetros invertidos
                vetRes.push(vetEsq[EsqVetor])
                EsqVetor++
            }
            else {
                vetRes.push(vetDir[DirVetor])
                DirVetor++
            }
            comparacoes++
        }
        // De qual lado a sobra
        let sobra

        // Sobra à esquerda
        if(EsqVetor < DirVetor) sobra = vetEsq.slice(EsqVetor)
        // Sobra à direita
        else sobra = vetDir.slice(DirVetor)

        // Retorna vetor de resultados + sobra
        return [...vetRes, ...sobra]
    }
    
    // Para ser "desmontado", um vetor deve ter, pelo menos, 2 elementos
    if(vetor.length > 1) {
        const meio = Math.floor(vetor.length / 2)
        let vetEsq = vetor.slice(0, meio)
        let vetDir = vetor.slice(meio)
        divisoes++

        // Chamadas recursivas à função
        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp)

        const vetFinal = mesclar(vetEsq, vetDir)
        juncoes++
        
        return vetFinal
    }
    return vetor
}

import { gastos } from './includes/cota-parlamentar-8.5-mil.mjs'

divisoes = 0, juncoes = 0, comparacoes = 0

console.time('Ordenando gastos...')

// Ordenação por partido
// por nome_parlamentar 
// por id_documento
mergeSort(gastos, (a, b) => {
    // uf iguais
    if(a.partido === b.partido) { 
        // cargo igual, 
        // diferença no numero do candidato
        if(a.nome_parlamentar === b.nome_parlamentar)
            return a.id_documento > b.id_documento
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
console.log({divisoes, juncoes, comparacoes, memoria})