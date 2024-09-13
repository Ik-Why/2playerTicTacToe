let turn = "x"
let change = 1
let disabled = false

document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("turn").innerText = "Turn: " + turn.toUpperCase()
})

function XorO(event) {
    let buttonId = event.target.id;
    let textTurn = "x"

    if (change == 1) {
        turn = "x"
        textTurn = "o"
        change = 0
    } else if (change == 0){
        turn = "o"
        textTurn = "x"
        change = 1

    }

    document.getElementById(buttonId).innerHTML=turn
    document.getElementById(buttonId).disabled=true
    document.getElementById("turn").innerText = "Turn: " + textTurn.toUpperCase()
}

function resetGame() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById("Btn"+i).innerHTML=" "
        document.getElementById("Btn"+i).disabled=false
    }
    turn = "x"
    document.getElementById("turn").innerText = "Turn: " + turn.toUpperCase()
    change = 1
}