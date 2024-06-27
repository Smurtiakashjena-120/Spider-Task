
//acessing game Board to append game squares
const gameBoard =  document.querySelector(".gameBoard")
//accessing the parent element of gameboard
const parent =  document.querySelector(".parent")
//acessign game over board
let gameOverParent=document.querySelector(".gameOverParent");
let gameOver=document.querySelector(".gameOver");


//variable for timer and timer 0 check
let intervalID ;
let timerCheckId;

window.onload = ()=>{
    init();
  }





const winCondition = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [0,5,10,15],
    [3,6,9,12]

]


//declaring variable for turn change
let turnO;
//declaring variable for storing all square
let allSquares;

//logic for changing turn instruction

const turnText = document.querySelector("#turnId")

function updateTurn(){

  turnText.innerText = turnO ? "O's Move !!" : "X's Move !!"

}


//funciton to initialize a new game , 
function init(){

    //appending 16 divs for 4 cross 4board

for(let i =0 ; i< 4 ; i++){
    for(let j = 0 ; j<4 ; j++){
        let square = document.createElement("div");
        square.classList.add("square");   

     if(i % 2 == 0){
        if( j%2 == 0){
            square.style.backgroundColor = "#507DBC" 
        }else{
            square.style.backgroundColor = "#DAE3E5"
        }
     }else{
        if( j%2 == 0){
             square.style.backgroundColor = "#DAE3E5"
             
        }else{
            square.style.backgroundColor = "#507DBC"
        }
     }

     gameBoard.appendChild(square)
    }
}

//acessing all squares
 allSquares = document.querySelectorAll(".square")

//adding event listner to each child such that we can add element on click
allSquares.forEach(square => {
    square.addEventListener("click" , ()=>{
        addElement(square);
    })
})

//updating turn o value
turnO = true
winnerFlag = false
updateTurn()

if(intervalID){
    clearInterval(intervalID);
}
if(timerCheckId){
    clearInterval(timerCheckId);
}

timeLimit = 60;
updateTime();

intervalID=setInterval(updateTime,1000)
timerCheckId=setInterval(checkTime,500)


}


function addElement(square){

    if(turnO){
        square.innerText = 'O';
        turnO =false;
        //checking game winner conditions 
        //updating time after changing turn
    startNewTime();
        checkWinner();
        gamedraw();
        square.classList.add("disable")
        //updating turn
        updateTurn();
    


    }else{
        square.innerText = 'X';
        turnO = true;
        square.classList.add("disable")
            //updating time after changing turn
        startNewTime();
        //checking game winner condition
         checkWinner();
         gamedraw()
         //updating turn
         updateTurn()

    }

}




  //function for checking winner

let winnerFlag = false  

function checkWinner(){

winCondition.forEach(pattern => {

//pattern = [0,1,2]
 let val1 =allSquares[pattern[0]];
 let val2 =allSquares[pattern[1]];
 let val3 =allSquares[pattern[2]];
 let val4 =allSquares[pattern[3]];

if(val1.firstChild && val2.firstChild && val3.firstChild && val4.firstChild){
    if (val1.innerText == val2.innerText && val2.innerText == val3.innerText && val3.innerText == val4.innerText ){
        
        allSquares[pattern[0]].style.backgroundColor = 'green';
        allSquares[pattern[1]].style.backgroundColor = 'green';
        allSquares[pattern[2]].style.backgroundColor = 'green';
        allSquares[pattern[3]].style.backgroundColor = 'green';

        allSquares.forEach(square => {
            square.classList.add("disable")
        })
        //updating winner flag such that gameOver will not functioned
        winnerFlag = true;
        //ensuring that if any one wins then all timer should stop
        clearAllIntervals();

         gameOverParent.classList.remove("hidden");
         parent.classList.add("hidden");
         let p =document.createElement("p");
         p.innerText=`${val1.innerText} won the match`;
         let p2 =document.createElement("p");
         p2.innerText=`PRESS THE RESET BUTTON TO START A NEW MATCH`;

         gameOver.appendChild(p);
         gameOver.appendChild(p2);

           
    }


}
})
    
  }

//game draw logic
function gamedraw(){

    let count =0;
  allSquares.forEach(square => {
    if(square.firstChild){
        count++;
    }
  })

  if((count == 16) && !winnerFlag){

    allSquares.forEach(square => {
        square.style.backgroundColor = "#a2b9bc"
    })
            //ensuring that if any one wins then all timer should stop
    clearAllIntervals();
    
    gameOverParent.classList.remove("hidden");
    parent.classList.add("hidden");
    let p =document.createElement("p");
    p.innerText=`The Game Is Draw`;
    let p2 =document.createElement("p");
    p2.innerText=`PRESS THE RESET BUTTON TO START A NEW MATCH`;

    gameOver.appendChild(p);
    gameOver.appendChild(p2);





  }
   

  }

  //function to start a new game
function  newGame(){
    var paragraphs = gameOver.getElementsByTagName('p')
    var paragraphsArray = Array.from(paragraphs);

    // Loop through the array and remove each p element
    paragraphsArray.forEach(function(p) {
        p.parentNode.removeChild(p);
    });

    allSquares.forEach(square => {
        gameBoard.removeChild(square);
    })

    init();
}

//declaring time limit and svg for timer
let timeLimit =60;
const watchSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>`

const timer = document.querySelector("#timer")

function updateTime(){
   
    timer.innerHTML = watchSvg + " " + timeLimit +" seconds"

   if(timeLimit - 1 >= 0){
    timeLimit -- ;
   }

}
//function to change time after each's turn
function startNewTime(){

    //updating time after changing turn
    clearInterval(intervalID);
    timeLimit = 59;
    //ensuring that first time its called as there will be delay of 1sec due to setinterval
    updateTime();
    intervalID = setInterval(updateTime,1000)

}

//check time if it's 0 then declare winner
function checkTime(){

    if(timeLimit == 0){

        allSquares.forEach(square => {
            square.classList.add("disable")
        })
        clearInterval(timerCheckId);
        setTimeout(()=>{
            let looser = turnO ? "O" : "X"

            gameOverParent.classList.remove("hidden");
            parent.classList.add("hidden");
            let p =document.createElement("p");
            p.innerText=`${looser} Lost the match , time is over`;
            let p2 =document.createElement("p");
            p2.innerText=`PRESS THE RESET BUTTON TO START A NEW MATCH`;
   
            gameOver.appendChild(p);
            gameOver.appendChild(p2);
    
        },1500)
    }

    

}

//acessing reset button
const resetBtn = document.querySelector("#resetBtn")

resetBtn.addEventListener("click",()=>{
    parent.classList.remove("hidden")
    gameOverParent.classList.add("hidden")
    newGame();
})

//function for clearing all intervals

function clearAllIntervals(){
    if(intervalID){
        clearInterval(intervalID);
    }
    if(timerCheckId){
        clearInterval(timerCheckId);
    }
}




//    gameOverParent.classList.remove("hidden");
