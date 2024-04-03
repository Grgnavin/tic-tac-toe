let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');


let turn0 = true; //if it is true than 0 will print either x will print

const resetGame = () => {
    turn0 = true;
    enable();
    msgContainer.classList.add('hide');
}

const winPattern = [
    [0,1,2], //Horizontal
    [3,4,5], //Horizontal
    [6,7,8], //Horizontal
    [0,3,6], //vertical
    [1,4,7], //vertical
    [2,5,8], //vertical
    [0,4,8], //diagonal
    [2,4,6]  //diagonal
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turn0){//player0
            box.innerHTML = '0';
            turn0 = false;
        }else {//player X
            box.innerHTML = 'X';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const disable = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enable = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = '';
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulation! The winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disable();
}

const checkWinner = () => {
    for(let patterns of winPattern){
        let pos1Val =  boxes[patterns[0]].innerText;
        let pos2Val =  boxes[patterns[1]].innerText;
        let pos3Val =  boxes[patterns[2]].innerText;

        if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);

            }
        }

    }
}

newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);