/*
    O código abaixo representa um trecho de uma das estruturas de dados estudadas.

    1. Identifique a estrutura de dados e o método (função) representado no código abaixo.
    Lista encadeada (LinkedList)
    método remove
    
    2. Faça o mapeamento das variáveis (registrar em comentário o propósito de cada uma delas).
    c -> 
    E -> LinkedList
    #f -> nodo inicio da lista (head)
    #g -> nodo final (tail)
    #h -> quantidade de nodos na lista (count)
    i ->(metodo do remove)
    j -> posição da remoção
    k -> para remoção
    l -> posição anterior


    
    3. Comente os principais trechos do código, explicando seu objetivo.
*/

class E {

    /* Código omitido */

    i(j) {
        if(this.empty || j < 0 || j > this.#h - 1) return undefined // se a lista for vazia ou se o j da posição for menor que 0
        let k
        if(j === 0) { // se a remoção for no inicio da lista
            k = this.#f
            this.#f = this.#f.c 
            if(this.#h === 1) this.#g = this.#f.c // se remover o ultimo nodo, atualiza
        }
        else {  // se for alguma poisção intermediária
            let l = this.#f
            for(let i = 0; i < j - 1; i++) l = l.c // for até achar a posição anterior
            k = l.c
            let m = k.c
            l.c = m
            if(j === this.#h - 1) this.#g = l  // se remover o ultimo nodo, atualiza
        }
        this.#h-- // diminui no contador
        return k.b
    }

    /* Código omitido */

}