
const styleUpperContainer = () => {

    const upperContainer = document.querySelector('.upperContainer');

    upperContainer.style.backgroundColor = 'red';
    upperContainer.style.display = 'flex';
    upperContainer.style.justifyContent = 'center';
    upperContainer.style.alignItems = 'center';
    upperContainer.style.margin = '20px';
    upperContainer.style.borderRadius = '20px';
}


const styleInputContainer = () => {

    const inputContainer = document.querySelector('.inputContainer');

    inputContainer.style.display = 'flex';
    inputContainer.style.justifyContent = 'center';
    inputContainer.style.alignItems = 'center';
    inputContainer.style.margin = '20px 0px';
    inputContainer.style.width = '100%';
    inputContainer.style.textAlign = 'center';
}

const styleH1Container = () => {

    const h1Container = document.querySelector('.h1Container')
    h1Container.style.width = '100%';
    h1Container.style.textAlign = 'center';
}

const styleInput = () => {

    const input = document.querySelector('input');
    input.style.padding = '10px';
    input.style.width = '60%';
}

const styleButton = () => {

    const button = document.querySelector('button');
    button.style.padding = '10px';
    button.style.width = '20%';
}

const styleTodoContainer = () => {

    const ul = document.querySelector('ul');
    ul.style.margin = '0px';
    ul.style.padding = '0px';
}

const styleTodos = () => {
    const allLiItems = document.querySelectorAll('li');
    allLiItems.forEach((item, index) => {
        if (index % 2 === 0) {
            item.style.backgroundColor = '#DCDCDC';
        } else {
            item.style.backgroundColor = 'white';
        }
    });
}

const styleCheckedTodo = () => {
    const checked = document.querySelectorAll('.checked');

    // Clear previous styles
    const allLiItems = document.querySelectorAll('li');

    allLiItems.forEach(item => {
        item.style.textDecoration = 'none';

        // Hide checkmark for unchecked items
        const checkmark = item.querySelector('.checkmark');
        if (checkmark) {
            checkmark.style.display = 'none';
        }
    });

    // Apply styles to checked todos and show checkmark
    checked.forEach(item => {
        item.style.textDecoration = 'line-through';
        item.style.backgroundColor = '#808080';

        // Show checkmark
        const checkmark = item.querySelector('.checkmark');
        if (checkmark) {
            checkmark.style.display = 'inline-block';
        }
    });
}


const addStyles = () => {

    styleUpperContainer();
    styleInputContainer();
    styleH1Container()
    styleInput()
    styleButton()
    styleTodoContainer()
}

addStyles()
