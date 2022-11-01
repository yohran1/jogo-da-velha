
document.addEventListener("DOMContentLoaded", ()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener("click", click)
    })

})
function click(event){

    let square = event.target;
    let position = square.id;

    if(move(position)){
        

        setTimeout(() => {
            alert("O jogo Acabou!! - O vencedor foi " + playerTime)
        },10)
    }
    upDateSquare(position);
}

function upDateSquare(position){

    let square = document.getElementById(position.toString())
    let symbol = board[position];

    square.innerHTML = `<div class='${symbol}'></div>`
}

