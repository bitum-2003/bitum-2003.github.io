const content = document.querySelector('#content');
const btnDown = document.querySelector('#btnDown');

function handleButtonClick() {
    content.scrollIntoView({ block: "start", behavior: "smooth" });
}

btnDown.addEventListener('click', handleButtonClick);
