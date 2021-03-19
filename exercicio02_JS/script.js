let nome1 = prompt('Pessoa 1: Digite seu nome');
let sobrenome1 = prompt('Pessoa 1: Digite seu sobrenome');
let idade1 = prompt('Pessoa 1: Digite sua idade');
let paisdeorigem1 = prompt('Pessoa 1: Digite seu país de origem');
paisdeorigem1 = paisdeorigem1.toUpperCase();
 

let nome2 = prompt('Pessoa 2: Digite seu nome');
let sobrenome2 = prompt('Pessoa 2: Digite seu sobrenome');
let idade2 = prompt('Pessoa 2: Digite sua idade');
let paisdeorigem2 = prompt('Pessoa 2: Digite seu país de origem');
paisdeorigem2 = paisdeorigem2.toUpperCase();

let deltaEdade = Math.abs(idade1 - idade2);

console.table(
  {
      "Pessoa1": nome1 + " " + sobrenome1,
      "Idade1": idade1,
      "Pais de Origem1": paisdeorigem1,
      "Pessoa2": nome2 + " " + sobrenome2,
      "Idade2": idade2,
      "Pais de Origem2": paisdeorigem2,
  }
)

if (idade1 < idade2) {
  console.log (`${nome1}, é menor que ${nome2} por ${deltaEdade} ano(s)`);
} else if (idade1 == idade2) {
  console.log (`${nome1} e ${nome2} tem a mesma idade`);
} else {
  console.log (`${nome1}, é maior que ${nome2} por ${deltaEdade} ano(s)`);
}

if (paisdeorigem1 == paisdeorigem2) {
  console.log (`${nome1} e ${nome2} são do mesmo país. ${paisdeorigem1}`);
} else {
  console.log (`${nome1} é de ${paisdeorigem1} e ${nome2} é de ${paisdeorigem2}`);}