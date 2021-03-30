/* 
    Uma classe pode ser comparada a uma forma de bolo. Assim como esse utensílio,
    a classe empresta algumas características aos obejtos que serão criados a partir dela,
    embora outras características dos objetos possam variar.
*/

// Por convenção, nomes de classes em JS se iniciam com letras maiúsculas
class FormaGeometrica {

    //Declaração dos atributos privados
    #base
    #altura
    #tipo

    // Uma classe pode conter funções. Mas, quando funções fazem parte de uma classe, elas são denominadas MÉTODOS.

    // Um método especial é o constructor(). Ele é chamado toda vez que se vai criar um novo objeto a partir da classe.
    // No constructor(), podem ser feitas validações que, ao falhar, geram um Error.
    // A existência de um ou mais Errors impede que o objeto seja criado.
    constructor(base, altura, tipo) {

        // base deve ser numérica e seu valor maior que zero
        if(isNaN(base) || base <= 0)
            throw new Error('A base deve ser numérica e seu valor maior que zero')

        // altura deve ser numérica e seu valor maior que zero
        if(isNaN(altura) || altura <= 0)
            throw new Error('A altura deve ser numérica e seu valor maior que zero')

        // if(tipo !== 'Q' && tipo !== 'T' && tipo !== 'E')
        if(! ['Q', 'T', 'E'].includes(tipo))
            throw new Error('O tipo deve ser Q, I ou E')

        // Se chegamos até aqui, podemos prosseguir com a criação do objeto.

        // No caso atual, precisamos armazenar as informações de base, altura e tipo em algum lugar,
        // de modo que, ao sair do constructor(), essas informações não se percam.

        // Para tanto, armazenaremos essa informações em variáveis que pertencerão ao escopo do objeto criado a partir da classe.
        // Essas variáveis especiais são denominadas ATRIBUTOS e diferecniam-se das variáveis comuns pela presença do prefixo THIS.

        // atributo recebe valor do parâmetro de mesmo nome

        /*
        // Atributos Públicos: podem ser acessados e modificados também fora da classe
        this.base = base
        this.altura = altura
        this.tipo = tipo
        */

        // Atributos Privados: só podem ser acessados e modificados dentro da classe
        this.#base = base
        this.#altura = altura
        this.#tipo = tipo

        console.log('Interno:')
    }
}

let forma1, forma2, forma3

// Criação de alguns objetos a partir da classe
try {
    forma1 = new FormaGeometrica(8,4, 'Q')
    console.log(forma1)
}
catch(erro){
    console.log('ERRO: ' + erro.message)
}

try { // TENTA executar as linha contidas
    // Se acontecer alguma exceção no bloco try, a execução é desviada para o bloco catch
    forma3 = new FormaGeometrica('cebola', 'alho', 'x')
    console.log(forma3)
}
catch(erro) { // O bloco catch() recebe o erro que foi gerado no bloco try
    // Tratamento de exceção. Nesse caso, simplesmente exibiremos a mensagem de erro.
    console.log('ERRO: ' + erro.message)
}

try{
    forma2 = new FormaGeometrica(2, 0.5, 'T')
    console.log('Externo:', forma2)
}
catch(erro) {
    console.log('ERRO: ' + erro.message)
}

// Alterando o valor de um atributo do objeto DEPOIS de sua criação
forma1.base = 'abobrinha'
console.log(forma1)