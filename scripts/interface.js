document.addEventListener('DOMContentLoaded', () => {

        let squares  = document.querySelectorAll(".squares");

        squares.forEach((square) => {
            square.addEventListener('click', handleClick);
        })

    })

function handleClick(event) {
    console.log(event.target)

    let square =  event.target;
    let position = square.id;

    handleMove(position)
    updadeSquares();
}

function updadeSquares(){

    let squares  = document.querySelectorAll(".square");

        squares.forEach((square) => {
            let position = square.id;
            let symbol = board[position];

           if (symbol != ''){
               square.innerHTML =`<div class='${symbols}'></div>`
           }
        })

}