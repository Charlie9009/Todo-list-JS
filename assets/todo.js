// Constants
const UL = document.querySelector('ul');
const ADDBTN = document.querySelector('#addBtn');

const createCheckmark = () => {
    // Create checkmark
    const checkmark = document.createElement('span');
    checkmark.textContent = '✔';
    checkmark.style.display = 'none';
    checkmark.style.marginRight = '10px';
    checkmark.className = 'checkmark';
    return checkmark;
}

const createSpan = () => {
    // Create html span
    const span = document.createElement('span');
    return span;
}

const handleMouseOver = (ev) => {
    // Change background color on mouse over
    ev.currentTarget.style.backgroundColor = '#C0C0C0';
}

const handleMouseOut = (ev) => {
    // Reset background color on mouse out
    ev.currentTarget.style.backgroundColor = '';
}

const newListItem = () => {
    // Add variables
    const li = document.createElement('li');
    const inputValue = document.querySelector('#myInput').value;
    const text = document.createTextNode(inputValue);
    const checkmark = createCheckmark();
    // append list, checkmarks and text
    li.appendChild(checkmark);
    li.appendChild(text);
    
    // If input is empty or only spaces trigger an alert
    if (inputValue.trim() === '') {
        alert('You did not write anything');
        return;
    }
    
    document.querySelector('#myUl').appendChild(li);
    styleTodos();
    document.querySelector('#myInput').value = '';
    // Close icon for todos
    const closeIconContainer = createSpan();
    const closeIcon = document.createTextNode('X');
    closeIconContainer.className = 'close';
    // Append closeIcon
    closeIconContainer.appendChild(closeIcon);
    li.appendChild(closeIconContainer);
    // Remove todo when closeIcon is clicked
    closeIconContainer.onclick = function () {
        let div = this.parentElement;
        div.style.display = 'none';
        styleTodos();
    };
    styleCloseTodoButton();

    // Adding mouseover and mouseout events to the list item and checkmark
    li.addEventListener('mouseover', handleMouseOver);
    li.addEventListener('mouseout', handleMouseOut);

    checkmark.addEventListener('mouseover', handleMouseOver);
    checkmark.addEventListener('mouseout', handleMouseOut);
}

const checkingTodoEvent = () => {
    // Add event listener for when checking of a todo
    UL.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
            styleCheckedTodo();
        }
    }, false);
}

const mouseOverTodos = () => {
    // Add event listener for mouse over
    UL.addEventListener('mouseover', (ev) => {
        if (ev.target.tagName === 'LI') {
            handleMouseOver(ev);
            styleCheckedTodo();
        }
    }, false);
}

const mouseOutOfTodos = () => {
    // Add event listener for mouse out
    UL.addEventListener('mouseout', (ev) => {
        if (ev.target.tagName === 'LI') {
            handleMouseOut(ev);
            styleTodos();
            styleCheckedTodo();
        }
    });
}

const addBtnHandler = () => {
    // Add event listener for btn
    ADDBTN.addEventListener('click', newListItem);
}

const addTodoWithEnterKey = () => {
    // Add todo with enter key
    const inputValue = document.querySelector('#myInput');
    inputValue.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            newListItem();
        }
    });
}

addTodoWithEnterKey();
addBtnHandler();
checkingTodoEvent();
mouseOverTodos();
mouseOutOfTodos();