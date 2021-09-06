import AddTodo from './components/add-todo.js';
import Modal from './components/modal.js';

export default class View {
  constructor() {
    this.model = null;
    this.list = document.getElementById('todoList');
    this.btn = document.getElementById('add');
    this.btn.onclick = () => this.addTodo('Titulo', 'Descripcion');
    this.addTodoForm = new AddTodo();
    this.modal = new Modal();

    this.addTodoForm.onClick((title, description) =>
      this.addTodo(title, description)
    );

    this.modal.onClick((id, values) => this.editTodo(id, values));
  }

  setModel(model) {
    this.model = model;
  }

  render() {
    const todos = this.model.getTodos();
    todos.forEach((todo) => this.print(todo));
  }

  addTodo(title, description) {
    const todo = this.model.addTodo(title, description);
    this.print(todo);
  }

  toggleCompleted(id) {
    this.model.toggleCompleted(id);
  }

  editTodo(id, values) {
    this.model.editTodo(id, values);
    const todo = document.getElementById(id);
    todo.children[0].children[0].children[0].innerText = values.title;
    todo.children[0].children[0].children[1].innerText = values.description;
  }

  removeTodo(id) {
    this.model.removeTodo(id);
    document.getElementById(id).remove();
  }

  print(todo) {
    const liItem = document.createElement('li');
    liItem.setAttribute('id', todo.id);
    const div = document.createElement('div');
    div.classList.add(
      'alert',
      'd-flex',
      'justify-content-between',
      'align-items-center',
      'task'
    );

    div.innerHTML = `
    <div class="flex-column">
      <b><p class="m-0">${todo.title}</p></b>
      <p class="mt-1 mb-0">${todo.description}</p>
    </div>
    <h3 class="m-0 d-inline-flex">
    </h3>
    `;

    liItem.appendChild(div);
    this.list.appendChild(liItem);

    const editBtn = document.createElement('i');
    editBtn.classList.add('fas', 'fa-edit', 'text-primary', 'mr-3');
    editBtn.setAttribute('role', 'button');
    editBtn.setAttribute('data-toggle', 'modal');
    editBtn.setAttribute('data-target', '#modal');
    editBtn.onclick = () =>
      this.modal.setValues({
        id: todo.id,
        title: liItem.children[0].children[0].children[0].innerText,
        description: liItem.children[0].children[0].children[1].innerText,
      });
    div.children[1].appendChild(editBtn);

    // const completeBtn = document.createElement('i');
    // completeBtn.classList.add('fas', 'fa-check-square', 'text-success', 'mr-3');
    // completeBtn.setAttribute('role', 'button');
    // completeBtn.onclick = () => this.toggleCompleted(todo.id);
    // div.children[1].appendChild(completeBtn);

    const removeBtn = document.createElement('i');
    removeBtn.classList.add('fas', 'fa-trash', 'text-danger');
    removeBtn.setAttribute('role', 'button');
    removeBtn.onclick = () => this.removeTodo(todo.id);
    div.children[1].appendChild(removeBtn);

    form.reset();
  }
}
