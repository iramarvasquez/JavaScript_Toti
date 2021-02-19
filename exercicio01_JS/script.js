let nome = prompt('Digite seu nome')
let sobrenome = prompt('Digite seu sobrenome')
let paisdeorigem = prompt('Digite seu país de origem')

console.log('Olá, ' + nome + ' ' + sobrenome + '!\n'+
            'Estamos felizes por ter alguém de ' + paisdeorigem + ' conosco.')

console.table (
  {  
      "Nome": nome,
      "Sobrenome": sobrenome,
      "Páis de Origem": paisdeorigem,
  } )