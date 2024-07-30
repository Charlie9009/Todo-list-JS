
const styleUpperContainer = () => {

    let upperContainer = document.querySelector('.upper-container');

    upperContainer.style.backgroundColor = 'red';
    upperContainer.style.display = 'flex';
    upperContainer.style.justifyContent = 'center';
    upperContainer.style.alignItems = 'center';
    upperContainer.style.margin = '20px';
    upperContainer.style.borderRadius = '20px';
}


const styleInputContainer = () => {

    let inputContainer = document.querySelector('.input-container');
    inputContainer.style.display = 'flex';
    inputContainer.style.justifyContent = 'center';
    inputContainer.style.alignItems = 'center';
    inputContainer.style.margin = '20px 0px';
    inputContainer.style.width = '100%';
    inputContainer.style.textAlign = 'center';
}

let h1Container = document.querySelector('.h1-container')
h1Container.style.width = '100%';
h1Container.style.textAlign = 'center';

let input = document.querySelector('input');
input.style.padding = '10px';
input.style.width = '60%';


let button = document.querySelector('button');
button.style.padding = '10px';
button.style.width = '20%';




styleUpperContainer();
styleInputContainer();

// upperContainer.style.color = 'white'