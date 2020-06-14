const formSubmit = document.querySelector('#add-task');
const inputTask = document.querySelector('#input-task');
const listGroup = document.querySelector('#list-group');

// Create element li with a
const createNewElement = (element, addClass, inputText, icon) => {
  // Create element
  const nElement = document.createElement(element);
  // Create text node and append to nElement
  const newText = document.createTextNode(inputText);
  // Icon
  nElement.innerHTML = `${icon}`;
  // Add class
  nElement.className = addClass;
  nElement.appendChild(newText);
  return nElement;
}

const removeTask = (event) => {
  const element = event.target.parentElement.classList.contains('float-right');
  if (element) {
    if (confirm('Estas seguro de eliminar!')) {
      event.target.parentElement.parentElement.remove()
    }
  }
}

const addTask = (event) => {
  event.preventDefault();
  if (inputTask.value !== '') {
    const li = createNewElement('li', 'list-group-item', inputTask.value, '');
    const a = createNewElement('a', 'float-right', '', '<i class="fa fa-trash"></i>');
    li.appendChild(a);
    listGroup.appendChild(li);
    console.log(listGroup);
    inputTask.value = '';
  } else {
    alert('Campo vacio!');
  }
}

const loadAddEventListeners = () => { 
  formSubmit.addEventListener('click', addTask);
  listGroup.addEventListener('click', removeTask);
}

loadAddEventListeners();