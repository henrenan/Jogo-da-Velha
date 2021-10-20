document.addEventListener('DOMContentLoaded', () => {

        let square = document.querySelectorAll(".square");

        square.forEach((square) => {
            square.addEventListener('click', handleClick);
        })

    })

function handleClick(event) {
    
    let square = event.target;
    let position = square.id;

    handleMove(position)
    updateSquares();

}

function updateSquares(){
    let square = document.querySelectorAll(".square");

        square.forEach((square) => {
            let position = square.id;
            let symbols = board[position];

            if(symbols != ''){
                square.innerHTML = `<div class='${symbols}'></div>`
            }
        })
}