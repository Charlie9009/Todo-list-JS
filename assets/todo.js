const createCheckmark = () => {
    const checkmark = document.createElement('span');
    checkmark.textContent = '✔';
    checkmark.style.display = 'none';
    checkmark.style.marginRight = '10px';
    checkmark.className = 'checkmark';
    return checkmark;
}

const createSpan = () => {
    const span = document.createElement('span');
    return span;
}

const handleMouseOver = (ev) => {
    ev.currentTarget.style.backgroundColor = "#C0C0C0"; // Change background color on mouse over
}

const handleMouseOut = (ev) => {
    ev.currentTarget.style.backgroundColor = ""; // Reset background color on mouse out
}

const newListItem = () => {
    // Add todo item
    let li = document.createElement('li');
    let inputValue = document.querySelector('#myInput').value;
    let text = document.createTextNode(inputValue);

    const checkmark = createCheckmark(); // Create checkmark
    li.appendChild(checkmark);
    li.appendChild(text);
    
    if (inputValue === '') {
        alert('You did not write anything');
    } else {
        document.querySelector('#myUl').appendChild(li);
        styleTodos();
    }
    document.querySelector('#myInput').value = '';

    // Close icon for todos
    const closeIconContainer = createSpan();
    const closeIcon = document.createTextNode('X');

    closeIconContainer.className = 'close';
    closeIconContainer.appendChild(closeIcon);
    li.appendChild(closeIconContainer);

    closeIconContainer.onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
        styleTodos();
    };
    styleCloseTodoButton();

    // Adding mouseover and mouseout events to the list item and checkmark
    li.addEventListener('mouseover', handleMouseOver);
    li.addEventListener('mouseout', handleMouseOut);
    
    checkmark.addEventListener('mouseover', handleMouseOver);
    checkmark.addEventListener('mouseout', handleMouseOut);
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
        // Highlight the mouseover target
        if (ev.target.tagName === 'LI') {
            handleMouseOver(ev);
            styleCheckedTodo();
        }
    }, false);
}

const mouseOutOfTodos = () => {
    list.addEventListener('mouseout', (ev) => {
        // On mouse out
        if (ev.target.tagName === 'LI') {
            handleMouseOut(ev);
            styleTodos();
            styleCheckedTodo();
        }
    });
}

mouseOverTodos();
mouseOutOfTodos();