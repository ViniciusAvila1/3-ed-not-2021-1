/*
    O código abaixo representa um trecho de uma das estruturas de dados estudadas.

    1. Identifique a estrutura de dados e o método (função) representado no código abaixo.
    
    2. Faça o mapeamento das variáveis (registrar em comentário o propósito de cada uma delas).
    
    3. Comente os principais trechos do código, explicando seu objetivo.
*/

class E {

    /* Código omitido */

    i(j) {
        if(this.empty || j < 0 || j > this.#h - 1) return undefined
        let k
        if(j === 0) {
            k = this.#f
            this.#f = this.#f.c 
            if(this.#h === 1) this.#g = this.#f.c
        }
        else {
            let l = this.#f
            for(let i = 0; i < j - 1; i++) l = l.c
            k = l.c
            let m = k.c
            l.c = m
            if(j === this.#h - 1) this.#g = l
        }
        this.#h--
        return k.b
    }

    /* Código omitido */

}