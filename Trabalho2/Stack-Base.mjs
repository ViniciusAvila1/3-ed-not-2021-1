export class Stack {

    #data

    constructor() {
        this.#data = []     // Inicializa o vetor vazio
    }

    // Inserção
    push(val) {
        this.#data.push(val)
    }

    // Retirada
    pop() {
        return this.#data.pop()
    }

    // "Espiadinha": retorna o valor que está no topo da pilha(último valor), mas sem retirá-lo de lá
    peek() {
        return this.#data[this.#data.length - 1]
    }

    // A piha está vazia (true/false)
    get empty() {
        return this.#data.length === 0
    }

    print() {
        return JSON.stringify(this.#data)
    }
}