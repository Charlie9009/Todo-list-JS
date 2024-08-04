const createCheckmark = () => {
    const checkmark = document.createElement('span')
    checkmark.textContent = '✔';
    checkmark.style.display = 'none';
    checkmark.style.marginRight = '10px';
    checkmark.className = 'checkmark';
    return checkmark;
}

const createSpan = () => {
    const span = document.createElement('span');
    return span
}

const newListItem = () => {
    // Add todo item
    let li = document.createElement('li');
    let inputValue = document.querySelector('#myInput').value
    let text = document.createTextNode(inputValue);

    li.appendChild(createCheckmark())
    li.appendChild(text);
    if (inputValue === '') {
        alert('You did not write anything');
    } else {
        document.querySelector('#myUl').appendChild(li)
        styleTodos()
    }
    document.querySelector('#myInput').value = '';

    // close icon for todos
    const closeIconContainer = createSpan();
    const closeIcon = document.createTextNode('X');

    closeIconContainer.className = 'close';
    closeIconContainer.appendChild(closeIcon);
    li.appendChild(closeIconContainer);

    closeIconContainer.onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
        styleTodos()
    }
    styleCloseTodoButton();
}

document.querySelector('#addBtn').addEventListener('click', newListItem);

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        styleCheckedTodo();
    }
}, false);


const mouseOverTodos = () => {

    list.addEventListener('mouseover', (ev) => {
        // highlight the mouseover target
        ev.target.style.backgroundColor = "#C0C0C0";
        if (ev.target.className === 'checked') {
            styleCheckedTodo();
        }
    }, false,);
}

const mouseOutOfTodos = () => {

    list.addEventListener('mouseout', (ev) => {
        // On mouse out
        if (ev.target.tagName === 'LI') {
            styleTodos();
            styleCheckedTodo()
        }
    })
}


mouseOverTodos()
mouseOutOfTodos()