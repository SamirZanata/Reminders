
const getHours = () => {
    const clock = document.getElementsByClassName('clock')[0]
    const container = document.getElementsByClassName('container')[0];
    const date = new Date()
    //date.setHours(date.getHours() + 5)
    //Comente e descomente o codigo acima para adicionar horas e testar a imagem de fundo conforme os horarios.
   const hours = date.getHours()

   let greeting;
  
   if (hours >= 0 && hours < 12) {
     greeting = "Bom dia";
   } else {
     greeting = "Boa noite";
   }

    if (hours >= 0 && hours < 18) {
        container.style.backgroundImage = "url('./Photos/clarao-do-sol_74190-1494.avif')";
      } else {
        container.style.backgroundImage = "url('./Photos/download.jpg')";
      }
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds
    clock.innerHTML = `${hour}:${minute}:${second}`
  }
  
  setInterval(() => {
    getHours()
  }, 1000)
  
  const getDateTime = () => {
    const clock = document.getElementsByClassName('date')[0];
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${day}/${month}/${year}`;
    clock.innerHTML = formattedDate;
  };
  
  setInterval(() => {
    getDateTime();
  }, 1000);

// Recuperar afazeres salvos do armazenamento local
const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

// Referências aos elementos HTML
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Adicionar afazer
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    savedTodos.push(todoText);
    updateTodoList();
    saveTodosToStorage();
    todoInput.value = '';
  }
}

// Excluir afazer
function deleteTodo(index) {
  savedTodos.splice(index, 1);
  updateTodoList();
  saveTodosToStorage();
}

// Atualizar a lista de afazeres
function updateTodoList() {
  todoList.innerHTML = '';
  savedTodos.forEach((todo, index) => {
    const li = document.createElement('li');
    const todoText = document.createElement('span');
    const deleteButton = document.createElement('button');
    
    todoText.textContent = todo;
    deleteButton.textContent = 'Excluir';
    deleteButton.classList.add('delete-button');
    
    deleteButton.addEventListener('click', () => deleteTodo(index));
    
    li.appendChild(todoText);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

// Salvar afazeres no armazenamento local
function saveTodosToStorage() {
  localStorage.setItem('todos', JSON.stringify(savedTodos));
}

// Adicionar evento de clique ao botão "Adicionar"
addButton.addEventListener('click', addTodo);

// Atualizar a lista de afazeres ao carregar a página
updateTodoList();



  
