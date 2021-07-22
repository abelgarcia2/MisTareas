const lista = document.getElementById('lista');

const arrayElement = ['Elemento #1', 'Elemento #2', 'Elemento #3'];

/*arrayElement.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;

  lista.appendChild(li);
});*/

/*arrayElement.forEach((item) => {
  lista.innerHTML += `<li>${item}</li>`;
});*/

const fragment = document.createDocumentFragment();

arrayElement.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;

  const childNode = fragment.firstChild;
  console.log(item, childNode);

  fragment.appendChild(li);
});

lista.appendChild(fragment);
