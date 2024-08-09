
function todoList() {
    const ulElement = document.querySelector("ul");
    const addBtnElement = document.querySelector('.btn-add');
    const inputElement = document.querySelector('.task-name');
    const taskList = ['Walk the dog', 'Water the plants', 'Wash the dishes'];

    taskList.forEach(task => {
        addTask(task);
    });

    function addTask(label) {
        const liElement = document.createElement('li');
        const spanElement = document.createElement('span');
        liElement.appendChild(spanElement);

        spanElement.textContent = label;

        const deleteBtnElement = document.createElement('button');
        liElement.appendChild(deleteBtnElement);

        deleteBtnElement.textContent = 'Delete';

        ulElement.append(liElement);
    }

    function deleteTask(itemElement) {
        itemElement.parentNode.removeChild(itemElement);
    }

    addBtnElement.addEventListener('click', () => {
        if (inputElement.value === '') return;
        addTask(inputElement.value);

        inputElement.value = '';
    });

    ulElement.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            deleteTask(event.target.parentNode);
        }
    });
}

todoList();