let firstCard=14;
let secondCard= 7;
let sum = firstCard + secondCard +5;

let hasBlackJack=false;
let isAlive=true;
let message="";
 

function startGame(){
   document.getElementById("cards-El").textContent="cards are"+firstCard + " and " + secondCard;
    console.log("game started");
document.getElementById("sum-el").textContent="sum is:"+sum;
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
//cash out using boolean

document.getElementById("message-el").textContent="message: " + message;
}