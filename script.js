let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#newBtn");

let turnX = true;

const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const resetGame = () =>{
    turnX = true;
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msgContainer.classList.add("hide");
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    for(box of boxes){
        box.disabled = true;
    }
} 

const checkWinner = () => {
    for(let patterns of winningPatterns){
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
