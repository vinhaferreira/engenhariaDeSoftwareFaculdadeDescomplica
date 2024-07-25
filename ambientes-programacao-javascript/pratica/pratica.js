const rlSync = require('readline-sync');

const nome = rlSync.question('Qual seu nome ?');
const sobrenome = rlSync.question('Qual seu sobrenome ?');

const nomeCompleto = `${nome} ${sobrenome}`;
console.log(`Seu Nome completo é: ${nomeCompleto}`);

// const readlineSync = require('readline-sync'); // Importar módulo readline-sync

// // Solicitar nome ao usuário
// const nome = readlineSync.question('Qual é o seu nome? ');

// // Solicitar sobrenome ao usuário
// const sobrenome = readlineSync.question('Qual é o seu sobrenome? ');

// // Concatenar nome e sobrenome
// const nomeCompleto = `${nome} ${sobrenome}`;

// // Imprimir nome completo no console
// console.log(`Seu nome completo é: ${nomeCompleto}`);
