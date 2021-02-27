let frutas = ['laranja', 'maçã', 'banana', 'pera', 'uva', 'mamão']

//exibir o vetor
console.log(frutas)

//tirar o último elemento do vetor
let ultimaFruta = frutas.pop()

console.log(frutas)
console.log(ultimaFruta)

//tirar o primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

//removendo de posições intermediárias
// splice()
// 1° parâmetro: posição que será removida (contagem começa no zero)
// 2° parâmetro: quantidade de elementos que serão removidos
let terceiraFruta = frutas.splice(2,1) // Fruta na posição 2

console.log(frutas)
console.log(terceiraFruta) // splice() sempre retorna um vetor

//inserindo um elemento no fim do vetor
frutas.push('jabuticaba')

console.log(frutas)

//inserir elemento no início do vetor
frutas.unshift('amora')

console.log(frutas)

//inserindo em posição intermediária
// splice() para inserção
// 1° parâmetro: a posição onde ocorrerá a inserção
// 2° parÂmetro: quantos elementos serão excluídos
// Parâmetros seguintes: elementos a serem inseridos

// Inserindo na 4° posição
frutas.splice(3, 0, 'pêssego')
console.log(frutas)

// Inserindo 2 frutas na 3° posição
frutas.splice(2, 0, 'caqui', 'jaca')
console.log(frutas)

//Substituindo a 6° fruta
frutas.splice(5, 1, 'abacate')
console.log(frutas)