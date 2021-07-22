const form = document.getElementById('form');
const input = document.getElementById('input');
const todoList = document.getElementById('todoList');
const template = document.getElementById('template').content;
const fragment = document.createDocumentFragment();
let todos = {};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  setTodo(e);
});

const setTodo = e => {
  if (input.value.trim() === '') {
    console.log('is clean');
    return;
  }

  const todo = {
    id: Date.now(),
    text: input.value,
    completed: false,
  };

  todos[todo.id] = todo;

  //console.log(todos);

  form.reset();
  input.focus();

  printTodos()
};

const printTodos = () => {
    Object.values(todos).forEach(tarea => {

    })
}
