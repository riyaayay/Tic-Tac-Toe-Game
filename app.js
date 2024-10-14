let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let WinnerMsg = document.querySelector(".message");

let turn0 = true; 

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//Function--------

//disable boxes

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}


//enable boxes
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText =" ";
    }
}

//Show winner function
const showWinner = (winner) =>{
    WinnerMsg.innerText= `${winner} is the winner👑`;
    disableBoxes();
}


//check winner functiom
const checkWinner = () =>{
    for(let pattern of winpatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val)
                showWinner(pos1Val);
            }
            
        }
    }
}

//reset game function

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    // Looping through each box and clear its text
    boxes.forEach((box) => {
        box.innerText = " ";
    });
    WinnerMsg.innerText = "";
}

//logic
boxes.forEach((box)=>{
   box.addEventListener("click",() =>{
if(turn0 === true)
{
    box.innerText = "O"
    turn0 = false;
}
else{
    box.innerText = "X"
    turn0 = true;  
}
box.disabled = true;

checkWinner();
   });
});

resetBtn.addEventListener("click", resetGame);
