document.addEventListener('DOMContentLoaded', () => {

        let squares  = document.querySelectorAll(".square");

        squares.forEach((square) => {
            square.addEventListener('click', handleClick);
        })

    })

function handleClick(event) {

    let square =  event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
        alert(" O jogo Acabou - O Vencedor foi " + playerTime);
    }, 10);

    };
    updadeSquares(position);
}

function updadeSquares(position) {

    let square  = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML =`<div class='${symbol}'></div>`
    }
