export class Queue {

    #data
    #head
    #tail

    constructor() {
        this.#data = {}     // Objeto vazio
        this.#head = 0      // Início da fila
        this.#tail = -1     // Final da fila
    }

    enqueue(val){
        this.#tail++
        this.#data[this.#tail] = val
        console.log(this.#data, this.#head, this.#tail)
    }

    dequeue(){
        // Se a fila estiver vazia, retorna undefined para não
        // afetar o posicionamento de #head
        if(this.empty) return undefined

        let temp = this.#data[this.#head]   // Salva o elemento no inicio da fila
        delete this.#data[this.#head]       // Apaga o elemento no inicio da fila
        this.#head++
        console.log(this.#data, this.#head, this.#tail)
        return tempo
    }

    peek() {
        return this.#data[this.#head]
    }

    get empty() {
        return this.#tail - this.#head + 1 === 0
    }

    print() {
        return JSON.stringify(this.#data)
    }
}