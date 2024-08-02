
const newListItem = () => {
    // Add todo item
    let li = document.createElement('li');
    let inputValue = document.querySelector('#myInput').value
    let text = document.createTextNode(inputValue);

    li.appendChild(text);
    if (inputValue === '') {
        alert('You did not write anything');
    } else {
        document.querySelector('#myUl').appendChild(li)
        styleTodos()
    }
    document.querySelector('#myInput').value = '';

    // close icon for todos
    let span = document.createElement('span');
    let closeIcon = document.createTextNode('X');

    span.className = 'close';
    span.appendChild(closeIcon);
    li.appendChild(span);

    span.onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
        styleTodos()
    }
}

document.querySelector('#addBtn').addEventListener('click', newListItem);

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        styleCheckedTodo();
    }
}, false);



list.addEventListener('mouseover', (ev) => {
        // highlight the mouseover target
        ev.target.style.backgroundColor = "#C0C0C0";
    },
    false,
);

list.addEventListener('mouseout', (ev) => {
    // On mouse out
    if (ev.target.tagName === 'LI') {
        styleTodos();
        styleCheckedTodo()
    }
})
