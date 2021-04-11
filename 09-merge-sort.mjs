/*
    MERGE SORT

    No processo de ordenação, esse algoritmo "desmonta" o vetor original
    contendo N elementos até obter N vetores de apenas um elemento cada um.
    Em seguida, usando a técnica de mesclagem (merge), "remonta" o vetor,
    dessa vez com os elementos já em ordem.

*/

let comps = 0, divisoes = 0, juncoes = 0

function mergeSort(vetor) {
    
    function mesclar(vetEsq, vetDir) {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length) {
            if(vetEsq[pEsq] < vetDir[pDir]) {   //Se o da esquerda for o menor dos dois, joga ele no vetor de resultado e anda o ponteiro
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
            comps++
        }
        // Descobrir de qual lado sobrou
        let sobra

        // Sobra à esquerda
        if(pEsq < pDir) sobra = vetEsq.slice(pEsq)
        // Sobra à direita
        else sobra = vetDir.slice(pDir)

        // O vetor retornado será formado pelo vetor resultado + sobra
        return [...vetRes, ...sobra]    // Concatenando os 2 vetores
    }
    
    // Para ser "desmontado", um vetor deve ter, pelo menos, 2 elementos
    if(vetor.length > 1) {
        let meio = Math.floor(vetor.length / 2)
        // slice() fatia um vetor, copiando os elementos desde a posição inicial informada
        // até a posição final (exclusive - A ÚLTIMA POSIÇÃO NÃO ENTRA NA FATIA GERADA)
        let vetEsq = vetor.slice(0, meio)
        // Quando o segundo parâmetro de slice() é omitido, são incluídos todos os elementos até o final
        let vetDir = vetor.slice(meio)
        divisoes++

        //console.log({vetEsq, vetDir})

        // Chamadas recursivas à função para continuar o processo de desmontagem
        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)

        let vetFinal = mesclar(vetEsq, vetDir)
        juncoes++  
        //console.log({vetFinal})
        
        return vetFinal
    }
    return vetor    // Condição de saída: vetor.length === 1
}

//let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
//let numsOrd = mergeSort(nums)
//console.log({numsOrd})

import { nomes } from './includes/100-mil-nomes.mjs'

//console.log('ANTES:', nomes)
console.time('Ordenando nomes...')
let nomesOrd = mergeSort(nomes)
console.timeEnd('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log({comps, divisoes, memoria})
console.log('Depois: ', nomesOrd)