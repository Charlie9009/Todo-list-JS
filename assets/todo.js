
const newListItem = () => {
    let li = document.createElement('li');
    let inputValue = document.querySelector('#myInput').value
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert('You did not write anything');
    } else {
        document.querySelector('#myUl').appendChild(li)
    }
    document.querySelector('#myInput').value = '';
    
}

newListItem()
