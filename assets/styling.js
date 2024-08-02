
const styleUpperContainer = () => {

    let upperContainer = document.querySelector('.upperContainer');

    upperContainer.style.backgroundColor = 'red';
    upperContainer.style.display = 'flex';
    upperContainer.style.justifyContent = 'center';
    upperContainer.style.alignItems = 'center';
    upperContainer.style.margin = '20px';
    upperContainer.style.borderRadius = '20px';
}


const styleInputContainer = () => {

    let inputContainer = document.querySelector('.inputContainer');

    inputContainer.style.display = 'flex';
    inputContainer.style.justifyContent = 'center';
    inputContainer.style.alignItems = 'center';
    inputContainer.style.margin = '20px 0px';
    inputContainer.style.width = '100%';
    inputContainer.style.textAlign = 'center';
}

const styleH1Container = () => {

    let h1Container = document.querySelector('.h1Container')
    h1Container.style.width = '100%';
    h1Container.style.textAlign = 'center';
}

const styleInput = () => {

    let input = document.querySelector('input');
    input.style.padding = '10px';
    input.style.width = '60%';
}

const styleButton = () => {

    let button = document.querySelector('button');
    button.style.padding = '10px';
    button.style.width = '20%';
}

const styleTodos = () => {
    const allItems = document.querySelectorAll('#myUl li');
    allItems.forEach((item, index) => {
        if (index % 2 === 0) {
            item.style.backgroundColor = 'lightgrey';
        } else {
            item.style.backgroundColor = 'white';
        }
    });
}

const styleCheckedTodo = () => {

    let checked = document.querySelectorAll('.checked');
    // Clear previous styles
    let allLiItems = document.querySelectorAll('li');
    
    allLiItems.forEach(item => {
        item.style.textDecoration = 'none';
    });
    // Apply line-through style to clicked todo
    checked.forEach(item => {
        item.style.textDecoration = 'line-through';
    });
}


const addStyles = () => {

    styleUpperContainer();
    styleInputContainer();
    styleH1Container()
    styleInput()
    styleButton()
}




addStyles()

