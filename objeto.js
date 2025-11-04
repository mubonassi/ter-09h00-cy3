//Definindo informações por variaveis
let nome = "Murilo Bonassi";
let idade = 31;
let profissao = "Professor";
function falarnome(){
  alert("Oi meu nome é",nome)
}
//Criando um objeto simples e puro (definido)
let pessoaMurilo = {
  //Atributos
  nome: "Murilo Bonassi",
  idade: 31,
  profissao: "Professor",

  //Métodos
  falar: function(){
    console.log(`Olá! Meu é ${this.nome}`);
  }
}
alert("Nome da pessoa é: ",pessoaMurilo.nome); //Referenciando um atributo do objeto
pessoaMurilo.falar(); //Executando uma função/método do objeto

//Criando uma classe chamada pessoa
class Pessoa{
  //Atributos
  constructor(nome,idade,profissao){
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
  //Atributos
  falar(){
    console.log(`Hello World! My name is ${this.nome}`);
  }
}

//Instanciar objetos com o padrão da classe
let murilo = new Pessoa("Murilo",31,"Professor");
let erick = new Pessoa("Erick",13,"Estudante");
let joao = new Pessoa("João",61,"Estudante");

murilo.nome;
murilo.falar();