//Referenciando os elementos nas variaveis
//para recuperar valores e eventos
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

//Array inicial contendo os todos
var todos = ["Acordar", "Escovar os dentes", "Trabalhar"];

//Função para renderizar todos
function renderTodos() {
  //Limpar os elementos antes de renderizar
  listElement.innerHTML = "";

  //For especifico para arrays
  for (todo of todos) {
    //Variável pra criar o elemento <li>
    var todoElement = document.createElement("li");
    //Variável pra recuperar o texto do todo no array
    var todoText = document.createTextNode(todo);
    //todoElement recebendo a variável todoText
    todoElement.appendChild(todoText);
    //listElement recebendo o todoElement que será incluído
    //dentro do #app ul
    listElement.appendChild(todoElement);
  }
}

renderTodos();

//Função para adicionar ToDos
function addTodo() {
  //Recuperar o valor que está sendo incluído no input
  var todoText = inputElement.value;
  //Adicionar o texto que estava no input para o Array todos
  todos.push(todoText);
  //Apagar o valor do input novamente
  inputElement.value = "";
  //Renderizar todos novamente
  renderTodos();
}

buttonElement.onclick = addTodo;
