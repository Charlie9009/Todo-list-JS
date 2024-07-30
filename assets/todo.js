
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
inputContainer.style.margin = '20px 0px';
}


styleUpperContainer();
styleInputContainer();

// upperContainer.style.color = 'white'