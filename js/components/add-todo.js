import Alert from './alert.js';

export default class AddTodo {
  constructor() {
    this.btn = document.getElementById('add');
    this.title = document.getElementById('input-title');
    this.description = document.getElementById('input-description');

    this.alert = new Alert('alert');
  }

  onClick(callback) {
    this.btn.onclick = () => {
      if (this.title.value.trim() === '') {
        this.alert.show('Es necesario introducir un título');
      } else {
        this.alert.hide();
        callback(this.title.value, this.description.value);
      }
    };
  }
}
