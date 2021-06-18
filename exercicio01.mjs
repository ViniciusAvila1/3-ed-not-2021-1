/*

    1) Observe a árvore binária representada na figura "arvore.png". Responda:
        a) Quantos níveis essa árvore possui?
        Possui 6 níveis
        1° nivel: 51
        2° nivel: 16 e 87
        3° nivel: 9, 44, 72 e 99
        4° nivel: 1, 4, 35, 58, 79 e 92
        5° nivel: 29, 43, 60 e 86
        6° nivel: 20

        b) Qual a altura da subárvore cuja raiz é 16?
        h = 4 (44 -> 35 -> 29 -> 20)
        c) Qual a profundidade do nodo de valor 29? p = 4

    2) Monte em código, neste arquivo, a árvore representada na figura.

    3) No código, remova os seguintes nodos: 58, 35, 87 e 51.

    4) Execute os métodos de percurso da árvore e anote, abaixo, os respectivos resultados após as remoções:
        a) Percurso em-ordem:  1,  9, 14, 16, 20, 29, 43, 44, 60, 72, 79, 86, 92, 99
        b) Percurso pré-ordem: 44, 16,  9,  1, 14, 29, 20, 43, 86, 72, 60, 79, 99, 92 (conta só na descida)
        c) Percurso pós-ordem: 1, 14,  9, 20, 43, 29, 16, 60, 79, 72, 92, 99, 86, 44 (conta só na subida)

    5) Anexe este arquivo, com o código da árvore binária de busca, ao
        entregar a prova.

*/

import { BinarySearchTree } from './lib/BinarySearchTree.mjs'

const arvore = new BinarySearchTree()

let percEmOr = [], percPreOr = [], percPosOr = []

arvore.insert(51)
arvore.insert(87)
arvore.insert(99)

arvore.insert(92)
arvore.insert(72)
arvore.insert(58)
arvore.insert(60)
arvore.insert(79)
arvore.insert(86)
// Lado direito inserido
arvore.insert(16)
arvore.insert(9)
arvore.insert(1)
arvore.insert(14)
arvore.insert(44)
arvore.insert(35)
arvore.insert(29)
arvore.insert(43)
arvore.insert(20)
// Lado esquerdo inserido

// No código, remova os seguintes nodos: 58, 35, 87 e 51
arvore.remove(58)
arvore.remove(35)
arvore.remove(87)
arvore.remove(51) // Quando remove o 51 (raiz), o maior do lado esquerdo que assume (44)

arvore.inOrderTraversal(n => percEmOr.push(n))
arvore.preOrderTraversal(n => percPreOr.push(n))
arvore.postOrderTraversal(n => percPosOr.push(n))

console.log({percEmOr})
console.log({percPreOr})
console.log({percPosOr})