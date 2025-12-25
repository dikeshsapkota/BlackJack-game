//cards in array
let cards=[];
let hasBlackJack=false;
let isAlive=true;
let message="";
let sum=0;
  //checking the conditions with function
function checkGame(){
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

function startGame(){
    
   
 firstCard= Number(document.getElementById("first-Card").value);
 secondCard= Number(document.getElementById("second-Card").value);
 //update cards array
cards=[firstCard,secondCard];
 sum = firstCard + secondCard;
//popup displaying cards using array and sum
for(let i=0;i<cards.length;i++){
   document.getElementById("cards-El").textContent+=cards[i]+" ";}
    console.log("game started");
document.getElementById("sum-el").textContent="sum is:"+sum;
checkGame();
}
//resetting the game
function newGame(){
    //reset game states
   let hasBlackJack=false;
let isAlive=true;
let message="";
sum=0;
//popup clearing

document.getElementById("cards-El").textContent="";
document.getElementById("sum-el").textContent="";
document.getElementById("message-el").textContent="";
//clearing card inputs
document.getElementById("first-Card").value="";
document.getElementById("second-Card").value="";
 
}
//drawing new card
function newCard(){
if (isAlive && !hasBlackJack) {
    console.log("drawing a new card from the deck");
        let newCard=3;
        
        sum += newCard;
        cards.push(newCard);
        document.getElementById("sum-el").textContent="sum is:"+ sum;
document.getElementById("cards-El").textContent +=" " + newCard;
checkGame();}


    }
   

   
    