// Função para ser usada como construtora
function criandoPessoa() {

  var pessoa = {
    nome: prompt('Digite seu nome'),
    sobrenome: prompt('Digite seu sobrenome'),
    idade: prompt('Digite sua idade'),
    paisdeorigem: prompt('Digite seu país de origem').toUpperCase()
  };

  return pessoa;

}

// Agrupando os dados de cada pessoa em um objeto (array)

var listaPessoas = [];

do {
  listaPessoas.push(criandoPessoa());
}
while (prompt("Deseja adicionar outra pessoa? S/N") != "N");

console.table(listaPessoas);

// Função para determinar o num de pessoas inseridas

function numPessoas() {

  totalPessoas = listaPessoas.length;

  return totalPessoas;

}

console.log (`Temos ${numPessoas()} pessoas na lista`);

// Detreminando o numero de pessoas por país

listaPaíses = [];

for (var i = 0; i < listaPessoas.length; i++) {

  listaPaíses.push(listaPessoas[i].paisdeorigem);

}
console.log (`Lista de países das pessoas na lista`);
console.log(listaPaíses);

function countOccurrences(arr) {
  return arr.reduce(function (a, b) {
    a[b] = a[b] + 1 || 1
    return a;
  }, {});
}

newArr = Object.entries(countOccurrences(listaPaíses));


console.log (`A seguinte tabela mostra o número de pessoas por país`);
console.table(countOccurrences(listaPaíses));
console.table(newArr);


var maxPeak = newArr.reduce((p, c) => p[1] > c[1] ? p : c);

var maiorNumPorPaís = maxPeak[1];
console.log (`O maior número de pessoas por pais é ${maiorNumPorPaís}`)

listaPáisesComMaisPessoas = [];

for (let i=0; i < newArr.length; i++){ 
  if(newArr[i][1] == maiorNumPorPaís) {  
      listaPáisesComMaisPessoas.push(newArr[i][0])
  }
}

if(listaPáisesComMaisPessoas.length > 1) {
  console.log (`Os países com mais pessoas no curso são ${listaPáisesComMaisPessoas} com ${maiorNumPorPaís} pessoas cada um`)
}
else {
  console.log (`O país com mais pessoas no curso é ${listaPáisesComMaisPessoas} com ${maiorNumPorPaís} pessoas`)
}





