/*
ESTRUTURA DE DADOS ÁRVORE BINÁRIA DE BUSCA
- Árvore ~> é uma estrutura de dados não-linear, hierárquica,
que é formada recursivamente por outras subárvores.
- Árvore binária ~> uma árvore na qual cada nodo tem grau máximo
igual a 2 (ou seja, cada nodo pode ter, no máximo, dois descendentes
diretos).
- Árvore binária de busca ~> é uma árvore binária otimizada para a
operação de busca binária. Por isso, na inserção, os valores são
colocados já em ordem.
*/

class Node {
    constructor(val) {
        this.data = val     // Sem # porque vai ser acessado diretamente de outra classe
        this.left = null        // Ponteiro para subárvore à esquerda
        this.right = null       // Ponteiro para subárvore à direita
    }
}

export class BinarySearchTree {

    #root       // Raiz da árvore

    constructor() {
        this.#root = null
        console.log(this.#root)
    }

    insert(val) {

        const node = new Node(val)
        // 1° caso: árvore vazia
        if(this.#root === null) this.#root = node // Primeiro nome que vier vira raíz

        // 2° caso: inserção recursiva -> percorre a árvore recursivamente para encontrar a posição do novo nodo
        else this.#insertNode(node, this.#root)

        console.log(this.#root)
    }

    // Parâmetros:
    // node -> nodo a ser inserido
    // root -> a raiz da SUBÁRVORE onde será feita a inserção
    #insertNode(node, root) {
        // 1° caso: valor do nodo é MENOR que o valor da raiz
        if(node.data < root.data) {
            // Verifica se o nodo à esquerda da raiz está desocupado e, se for o caso, insere aí o nodo
            if(root.left === null) root.left = node
            // Caso o nodo à esquerda da raiz já exista, reiniciamos o processo considerando este como raiz da subárvore
            else this.#insertNode(node, root.left)
        }
        // 2° caso: valor do nodo é MAIOR que o valor da raiz -> vai para a direita
        else if (node.data > root.data) {
            // Acontece a mesma coisa que no caso anterior, mas do lado direito
            if(root.right === null) root.right = node
            else this.#insertNode(node, root.right)
        }
        // Note que, se o valor do nodo for IGUAL ao valor da raiz, nada acontece;
        // O pedido de inserção é ignorado para evitar valores duplicados na árvore
    }

    /***************************
     * PERCURSOS
    *******************************/
   // percurso em ordem
   // 1°: VISITA-SE EM-ORDEM A SUBÁRVORE ESQUERDA
   // 2°: VISITA-SE p A RAIZ
   // 3°: VISITA EM-ORDEM A SUBÁRVORE DIREITA
   inOrderTransversal(fnCallback, root = this.#root) {
       if(root !== null) {
           this.inOrderTransversal(fnCallback, root.left)      // 1°
           fnCallback(root.data)                               // 2°
           this.inOrderTransversal(fnCallback, root.right)     // 3°
       }
   }

   // PERCURSO PRÉ-ORDEM
   // 1°: visita a raiz
   // 2°: visita pré-ordem esquerda
   // 3°: visita pré-orde, direita
   // fnCallback: função externa que será chamada toda vez que o percurso passar por um nodo
   preOrderTransversal(fnCallback, root = this.#root) {
       if(root !== null) {
           fnCallback(root.data)
           this.preOrderTransversal(fnCallback, root.left)
           this.preOrderTransversal(fnCallback, root.right)
       }
   }

   // PERCURSO PÓS-ORDEM
   // 1°: visita pós-ordem a subárvore esquerda
   // 2°: visita pós-ordem a subárvore direita
   // 3°: visita a raiz
   // fnCallback: função externa que será chamada toda vez que o percurso passar por um nodo
   postOrderTransversal(fnCallback, root = this.#root) {
       if(root !== null) {
           this.postOrderTransversal(fnCallback, root.left)
           this.postOrderTransversal(fnCallback, root.right)
           fnCallback(root.data)
       }
   }
}

const arvore = new BinarySearchTree()
arvore.insert(41)
arvore.insert(76)
arvore.insert(19)
arvore.insert(34)
arvore.insert(88)
arvore.insert(25)

let percursoEm = []
arvore.inOrderTransversal(val => percursoEm.push(val))
console.log({percursoEm})

let percursoPre = []
arvore.preOrderTransversal(val => percursoPre.push(val))
console.log({percursoPre})

let percursoPos = []
arvore.postOrderTransversal(val => percursoPos.push(val))
console.log({percursoPos})