/* 

    Quick sort

    Escolhe um dos elementos do vetor para ser o pivô (na nossa implementação, o último elemento)
    e, na primeira passada, divide o vetor, a partir da posição final do vetor,
    em um subvetor à esquerda contendo apenas valores menores que o pivô e outro subvetor à direita,
    que contém apenas valores maiores que o pivô.

    Em seguida, recursivamente, repete o processo em cada um dos subvetores até que todo o vetor esteja ordenado.

*/

function quickSort(vetor, ini = 0, fim = vetor.length -1) {
    if(fim > ini) {
    const pivot = fim
    let div = ini - 1
    // loop for vai até a PENÚLTIMA posição
    for(let i = ini; i < fim; i++) {
        if(vetor[i] < vetor[pivot]){
            div++
            if(i !== div){
                [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
            }
        }
    }
    div++
    // Colocamos o pivô no seu lugar definitivo
    if(vetor[pivot] < vetor[div]){
        [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]]
    }
    comps++
    // Ordena o subvetor à esquerda do pivô
    quickSort(vetor, ini, div - 1)

    // Ordena o subvetor à direita do pivô
    quickSort(vetor, div + 1, fim)
   }
}

trocas = 0, comps = 0, pass = 0
// let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
let nums = [9,8,7,6,5,4,3,2,1,0]
quickSort(nums)
console.log(nums)
console.log({trocas, comps, pass})