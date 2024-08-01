
const newListItem = () => {
    // Add todo item
    let li = document.createElement('li');
    let inputValue = document.querySelector('#myInput').value
    let text = document.createTextNode(inputValue);

    li.appendChild(text);
    if (inputValue === '') {
        alert('You did not write anything');
    } else {
        li.style.backgroundColor = 'grey';
        document.querySelector('#myUl').appendChild(li)

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
        console.log(div);
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
        styleCheckedTodo()
    }
}, false)

newListItem()
