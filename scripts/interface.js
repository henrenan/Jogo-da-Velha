document.addEventListener('DOMContentLoaded', () => {

        let square = document.querySelectorAll(".square");

        square.forEach((square) => {
            square.addEventListener('click', handleClick);
        })

    })

function handleClick(event) {
    
    let square = event.target;
    let position = square.id;

    if (HandleMove(position)) {

        setTimeout(() => {
            alert ("O Jogo Acabou - O Vencedor foi " + playerTime);

        }, 10);
        
    };
    updateSquares();

}
  
function updateSquares(position){
    let square = document.getElementById(position.toString());
    let symbols = board[position]; 
    square.innerHTML = `<div class='${symbols}'></div>`
}