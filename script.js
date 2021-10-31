const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const exampleAnswer = ['A skąd mam wiedzieć?', 'Chyba cię pogieło', 'Lepiej idz sie napij'];


const shakeBall = () => {
    ball.classList.add('shake-animaton');
    setTimeout(checkInput, 1000)
}


function checkInput() {

    if (input.value !== '' && input.value.slice(-1) === "?") {
        generateAnswer();
        error.textContent = "";

    } else if (input.value !== "" && input.value.slice(-1) !== "?") {
        error.textContent = "Zadaj pytanie ze znakiem ? ";
        answer.textContent = "";

    } else {
        error.textContent = "Zadaj jakieś pytanie";
        answer.textContent = "";
    }

    ball.classList.remove('shake-animaton');
}



const generateAnswer = () => {
    const numberAnswer = Math.floor(Math.random() * 3);
    answer.innerHTML = `<span>Odpowiedź:</span> ${exampleAnswer[numberAnswer]}`
}

ball.addEventListener('click', shakeBall);