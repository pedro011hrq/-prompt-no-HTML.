

//Nesta etapa está dizendo que daqui a uma certa quantidade de anos tal pessoa terá tal idade 
function calculadoraIdade(anos) {
    return `daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
    
};
// aqui a variavél const não muda e com isso está passando objetos como, idade e nome para aparecer na tela.
const pessoa1 = {
    nome: 'amelia',
    idade: 23,
};
const pessoa2 = {
    nome: 'Márcia',
    idade: 20,
};
const pessoa3 = {
    nome: 'Jonas',
    idade: 13,
};
// Nesta etapa damos o chamado de uma função, para que o codigo possa aparecer na tela e modificando com arrays e adicionamos um alert para que apareca na tela uma mensagem indicando que aprecera tanto no console quanto na tela inicial
console.log(calculadoraIdade.call(pessoa3, 40));
console.log(calculadoraIdade.apply(pessoa2, [24]));
alert(calculadoraIdade.call(pessoa3, 40));
