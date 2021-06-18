/*
    O código abaixo representa um trecho de uma das estruturas de dados estudadas.

    1. Identifique a estrutura de dados e o método (função) representado no código abaixo.
    
    2. Faça o mapeamento das variáveis (registrar em comentário o propósito de cada uma delas).
    
    3. Comente os principais trechos do código, explicando seu objetivo.
*/

class E {

    /* Código omitido */

    i(j, k) {
        if(j < 0) return
        const l = new A(k)
        if(this.empty) {
            this.#f = l
            this.#g = l
        }
        else if(j === 0) {
            l.d = this.#f
            this.#f.c = l
            this.#f = l
        }
        else if(j >= this.#h) {
            l.c = this.#g
            this.#g.d = l
            this.#g = l
        }
        else {
            let m = this.#n(j)
            let o = m.c
            l.d = m
            o.d = l
            l.c = o
            m.c = l
        }
        this.#h++

    }

    /* Código omitido */

}