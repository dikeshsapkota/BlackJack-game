
let hasBlackJack=false;
let isAlive=true;
let message="";
 

function startGame(){
    let firstCard= Number(document.getElementById("first-Card").value);
let secondCard= Number(document.getElementById("second-Card").value);
let sum = firstCard + secondCard;
//popup displaying cards and sum
   document.getElementById("cards-El").textContent="cards are"+firstCard + " and " + secondCard;
    console.log("game started");
document.getElementById("sum-el").textContent="sum is:"+sum;
//checking the conditions
if(sum > 21){
   
    message="you are out of the game";
    isAlive=false;
}
else if(sum< 21){
   
    message="do you want to draw a new card";
}else {

    message="wooho!you have got black jack";
    hasBlackJack=true;
   
}


document.getElementById("message-el").textContent="message: " + message;
}
function newGame(){
    //reset game states
   let hasBlackJack=false;
let isAlive=true;
let message="";
//popup clearing

document.getElementById("cards-El").textContent="";
document.getElementById("sum-el").textContent="";
document.getElementById("message-el").textContent="";
//clearing card inputs
document.getElementById("first-Card").value="";
document.getElementById("second-Card").value="";
 
}