//Comentário de linha
/*
Comentário de bloco
*/
// console.log("Hello World!");
// console.error("Erro");
// console.warn("Aviso");
// console.info("Informação");

// //Recuperando o botão submit com a função getElementById(id) e guardando ele em uma constante.
// const btn = document.getElementById("btnSubmit");
//Atrelar um evento ao botão, no caso, ao clicar no botão, ele vai executar a função.

// btn.addEventListener("click", function(){
//     console.log(this);
// });

// btn.addEventListener("click", ()=>{
//     console.log(this);
// });

// "use strict"
//Hoisting
// let nome = "Alexandre";

// if(true)
// {
//     let nome = "João";
// }

// console.log(nome);

// teste = "Olá";
// console.log(teste);

// var teste;

// Declaração de variáveis (var, let, const):
// // Usando var
// var x = 10;
// console.log(x);

// // // Usando let
// let y = 20;
// console.log(y);

// // // Usando const (constante, valor não pode ser alterado)
// const z = 30;
// console.log(z);
// // z = 20;

// Tipos de dados em JavaScript:

// // Number
// let num = 10;
// console.log(num);

// // String
// console.log(str.charAt(0));
// console.log(str.indexOf("mundo"));

// //console.log(str.slice(5, 7))
// console.log(str.indexOf("zureta"))
// console.log(str.slice(924, 930))
/* let m = console.log(str.charAt(5));
let u = console.log(str.charAt(6));
let mu = m + u;
let u = console.log(str.charAt(6));
let mu = m + u; */

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

// // Conversão entre tipos de dados:

// // Converter string para número
// let strNumero = "10";
// let numero = parseInt(strNumero);
// console.log(numero); // Saída: 10 (número)

// // Converter número para string
// let numeroStr = 20;
// let strNumero2 = numeroStr.toString();
// console.log(strNumero2); // Saída: "20" (string)

// // Converter para booleano
// let valor = 0;
// let booleano = Boolean(valor);
// console.log(booleano); // Saída: false (0 é considerado false)

// Exercício 1 - Variáveis e Hoisting:
// Qual será o valor de nome após a execução do código abaixo?
// "use strict";
// var nome = "Joaquim";
// if (true) {
//     let nome = "João";
// }
// console.log(nome);

// Exercício 2 - Declaração de Variáveis:
// Declare uma variável estrito utilizando let sem atribuir um valor. Imprima o valor de estrito no console.
// let estrito;
// console.log(estrito);

// Exercício 3 - Tipos de Dados:
// Qual é o tipo de dado da variável str?
// let str = "Olá, mundo!";

// Exercício 4 - Mesclar Arrays:
// Crie um novo array chamado arrConcatenado que seja a concatenação dos arrays arr1 e arr2. Imprima arrConcatenado no console.

// Exercício 5 - Acesso a Propriedades de Objetos:
// Acesse a propriedade idade do objeto obj e imprima seu valor no console.
// let obj = { nome: "João", idade: 25, devedor: true };
// console.log(obj.idade);

// Exercício 6 - Atributo Variável de Objetos:
// Atribua a string "São Paulo" à propriedade cidade do objeto obj. Imprima obj no console.

// Exercício 7 - Conversão de String para Número:
// Converta a string "10" em um número e imprima o resultado no console.

// Exercício 8 - Estrutura Condicional com Operadores:
// Qual será a saída do código abaixo?
// let idade = 20;
// let result = (idade >= 18) ? "Maior de idade" : "Menor de idade";
// console.log(result);

// Exercício 9 - Estrutura Condicional Tradicional:
// Qual será a saída do código abaixo?
// let age = 20;

// if (age >= 18) {
//     console.log("Maior de idade");
// } else {
//     console.log("Menor de idade");
// }

// Exercício 10 - Mesclar Arrays com Spread:
// Crie um novo array chamado arr4 que seja a concatenação dos arrays arr1 e arr2 utilizando o operador spread. Imprima arr4 no console.

let listaUsuarios = [
  { email: "email@email.com", senha: "123456" },
  { email: "jose@email.com", senha: "123456" },
  { email: "joao@email.com", senha: "123456" },
  { email: "maria@email.com", senha: "123456" },
];

// //Recuperar o botão de submit através da função querySelector.
// const btnSubmit = document.querySelector("button[type=submit]");
// //Atrelando o evento click ao botão.
// btnSubmit.addEventListener("click",()=>{

//     let emailUser = document.querySelector("input[type=email]").value;
//     let senhaUser = document.querySelector("input[type=password]").value;

//     //Popular o objeto com os dados do usuário.
//     usuario.email = emailUser;
//     usuario.senha = senhaUser;

// });

const validaLogin = (input1, input2, event) => {

    event.preventDefault();

  //Pegando os valores dos inputs pelo método value.
  const usuario = {
    email: input1.value,
    senha: input2.value,
  };

  //Recuperando elemento de mensagem.
  const msgStatus = document.querySelector(".valida");

  for (let x = 0; x < listaUsuarios.length; x++) {
    if (
      usuario.email === listaUsuarios[x].email &&
      usuario.senha === listaUsuarios[x].senha
    ) {

    localStorage.setItem("usuario-logado", JSON.stringify(listaUsuarios[x]));

      
      //Criando o elemento DIALOG:
      let novoModal = document.createElement("dialog");
      msgStatus.appendChild(novoModal);
      novoModal.setAttribute("class", "sucesso");
      novoModal.innerHTML = "<span>Login realizado com Sucesso!</span>";
      novoModal.showModal();

      let count = 10;
      setInterval(()=>{
        novoModal.innerHTML = `<span>Login realizado com Sucesso!</span><p>Você será redirecionado em ${count--} segundo....</p>`;
      },900);

      setTimeout(() => {
        novoModal.setAttribute("class", "valida");
        novoModal.innerHTML = "";
        window.location.href = "../status/sucesso.html";
      }, 10000);

      return true;
    }
  }

  
        //Criando o elemento DIALOG:
        let novoModal = document.createElement("dialog");
        msgStatus.appendChild(novoModal);
        novoModal.setAttribute("class", "erro");
        novoModal.innerHTML = "<span>Nome de usuario ou senha incoretos!</span>";
        novoModal.showModal();
        let count = 10;
        setInterval(()=>{
          novoModal.innerHTML = `<span>Nome de usuario ou senha incoretos!</span><p>Você será redirecionado em ${count--} segundo....</p>`;
        },900);


  setTimeout(() => {
    novoModal.setAttribute("class", "valida");
        novoModal.innerHTML = "";
    window.location.href = "../status/erro.html";
  }, 10000);

  return false;
};

const botao = document.querySelector("#btnOpen");
const modal = document.querySelector("dialog");

botao.addEventListener("click", function(){
  modal.showModal();
})