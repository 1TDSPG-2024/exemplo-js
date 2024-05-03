
// DOCUMENT OBJECT MODEL (DOM) - Gerenciado pela janela do navegador - Hierarquico

/*
Comentario de bloco
*/

//console.log("Hello World");
//console.error("Erro");
//console.warn("Aviso");
//console.info("Informação");

// Recuperando o botão submit com a 
// function getElementById(id) e guardando ele em uma constante

const btn = document.getElementById("btnSubmit"); // constante
// console.log(btn.inner); // atencao ao ponto e virgula
// Atrelar um evento ao botão, no caso, ao clicar no botão, ele vai executar a função

/* btn.addEventListener("click", function(){
    console.log(this); // Enxerga o elemento como um objeto
}); 
 */

/* btn.addEventListener("click", ()=>{  
    console.log(this); // Não "enxerga" elemento como um objeto, classe. Não associa
}); */



// "use strict"
//Hoisting

var nome = "Joaquim"; // variável

if(true)
{
    let nome = "João"; // Hoisting, Let respeita o escopo 
}

console.log(nome);


teste = "Olá"
console.log(teste);

var teste;


// Declaração de variáveis (var, let, const):
// Usando var
// var x = 10;
// console.log(x);

// // Usando let
// let y = 20;
// console.log(y);

// // Usando const (constante, valor não pode ser alterado)
// const z = 30;
// console.log(z);
// // z = 20;

// Tipos de dados em JavaScript:

// // Number
// let num = 10;
// console.log(num);

// // String
// let str = "Olá, mundo!";
// console.log(str.charAt(0));
// console.log(str.indexOf("Olá"));

// // Boolean
// let bool = true;
// console.log(bool);

// // Array
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6,7,8,9,10];
// console.log(arr1);
// console.table(arr1);
// // Mesclar Arrays
// let arr3 = arr1.concat(arr2);
// console.log(arr3);
// // Mesclar Arrays com SPREAD
// let arr4 = [...arr1, ...arr2];
// console.log(arr4);

// // Object
// let obj = { nome: "João", idade: 25, devedor: true};
// console.log(obj);
// console.table(obj);
// console.log(obj.nome);
// console.log(obj.idade);
// console.log(obj.devedor);
// console.log(obj["nome"]);
// //Quero carregar um atributo do objeto utilizando uma variável
// let atributo = "idade";
// console.log("ATRIBUTO VARIADO : " + obj[atributo]);

// //Adicionando um nova propriedade ao objeto OBJ e utilizando o operador SPREAD para preencher
// obj = {...obj, cidade: "São Paulo", estado: "SP"};
// console.log(obj);

// //DESTRUCTURING
// const pessoa = {nome : 'Maria', idade: 34, cidade: 'Florianópolis'};

// const {nome, idade, cidade} = pessoa;
// console.log(nome);
// console.log(idade);
// console.log(cidade);


// // EXERCÍCIOS

// // Conversão entre tipos de dados:

// // Converter string para número
// let strNumero = "10";
// let numero = parseInt(strNumero);
// console.log(numero); // Saída: 10 (número)

let strNumero = "10";
let numero = parseInt(strNumero);
console.log(numero);


// // Converter número para string
// let numeroStr = 20;
// let strNumero2 = numeroStr.toString();
// console.log(strNumero2); // Saída: "20" (string)

let numeroStr = 20;
let strNumero2 = numeroStr.toString();
console.log(strNumero2);

// // Converter para booleano
// let valor = 0;
// let booleano = Boolean(valor);
// console.log(booleano); // Saída: false (0 é considerado false)

let valor = 0;
let booleano = Boolean(valor);
console.log(booleano);

// EXERCÍCIOS

// Exercício 1 - Variáveis e Hoisting:
// Qual será o valor de nome após a execução do código abaixo?
// "use strict";
// var nome = "Joaquim";
// if (true) {
//     let nome = "João";
// }
// console.log(nome); // Saída: Joaquim

var nome = "Joaquim" // variável definida em escopo global
if (true){
    let nome = "João"; // Let respeita o escopo local
}
console.log(nome); // Chamando escopo global

// Exercício 2 - Declaração de Variáveis:
// Declare uma variável estrito utilizando let sem atribuir um valor. Imprima o valor de estrito no console.
// let estrito;
// console.log(estrito); // Saída: undefined

let estrito; // A variável foi declarada, porém não foi atribuído nenhum valor a ela
console.log(estrito)

// Exercício 3 - Tipos de Dados:
// Qual é o tipo de dado da variável str? // String
// let str = "Olá, mundo!";

// Exercício 4 - Mesclar Arrays:
// Crie um novo array chamado arrConcatenado que seja a concatenação dos arrays arr1 e arr2. Imprima arrConcatenado no console.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = arr1.concat(arr2);
console.log(arr3)

// Exercício 5 - Acesso a Propriedades de Objetos:
// Acesse a propriedade idade do objeto obj e imprima seu valor no console.
// let obj = { nome: "João", idade: 25, devedor: true };
// console.log(obj.idade); // Saída: 25

let obj = {nome: "João", idade: 25, devedor: true};
console.log(obj.idade);  


// Exercício 6 - Atributo Variável de Objetos:
// Atribua a string "São Paulo" à propriedade cidade do objeto obj. Imprima obj no console.

let obj1 = {cidade: "São Paulo", estado: "SP"};
console.log(obj1.cidade);
console.log(obj1.estado);


// Exercício 7 - Conversão de String para Número:
// Converta a string "10" em um número e imprima o resultado no console.

let num = "10";
let num2 = parseInt(num);
console.log(num2);

// Exercício 8 - Estrutura Condicional com Operadores:
// Qual será a saída do código abaixo?
// let idade = 20;
// let result = (idade >= 18) ? "Maior de idade" : "Menor de idade";
// console.log(result);

let idade = 20; // Maior de idade
let result = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(result);

// Exercício 9 - Estrutura Condicional Tradicional:
// Qual será a saída do código abaixo?
let age = 17;

if (age >= 18) {
        console.log("Maior de idade");
 } else {
    console.log("Menor de idade");
}

// Exercício 10 - Mesclar Arrays com Spread:
// Crie um novo array chamado arr4 que seja a concatenação dos arrays arr1 e arr2 utilizando o operador spread. Imprima arr4 no console.

arr4 = [10, 9, 8, 7, 6]
arr5 = [5, 4, 3, 2, 1, 0]

let arr6 = [... arr4, ...arr5];

console.log(arr6)