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
  //O innerHTML fará com que tudo que estiver dentro do <ul>
  //fique vazio
  listElement.innerHTML = "";

  //For especifico para arrays
  for (todo of todos) {
    //Variável pra criar o elemento <li>
    var todoElement = document.createElement("li");
    //Variável pra recuperar o texto do todo no array
    var todoText = document.createTextNode(todo);
    //Variável para adicionar o link para excluir o todo
    var linkElement = document.createElement("a");
    //Setando o atributo href no elemento <a> com o parâmetro #
    linkElement.setAttribute("href", "#");
    //Variável para saber a posição do elemento no array através do indexOf
    //Faz com que o índice do todo seja retornado
    var position = todos.indexOf(todo);
    //Passando a função para excluir o todo e utilizando
    //concatenação de string para passar a posição do elemento pra função
    linkElement.setAttribute("onclick", "deleteTodo(" + position + ")");
    //Variável para adicionar o texto no link
    var linkText = document.createTextNode("Excluir");
    //Adicionar o texto ao link
    linkElement.appendChild(linkText);
    //todoElement recebendo a variável todoText
    todoElement.appendChild(todoText);
    //todoElement recebendo também a variável linkElement
    todoElement.appendChild(linkElement);
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

//Função para adicionar ao clicar no botão
buttonElement.onclick = addTodo;

//Função para excluir todo recebendo a posição do array Todos
function deleteTodo(position) {
  //Método splice remove uma quantidade de itens do array
  //baseado na posição informada. Nesse caso será removido 1 elemento
  todos.splice(position, 1);
  renderTodos();
}
