//cards in array
let cards = [];
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum = 0;

function showplayer(){
    let player={
 playerName: document.getElementById("playername").value,
 playerChips: document.getElementById("balance").value

}
    console.log(player);
document.getElementById("player-el").textContent=player.playerName+": $"+player.playerChips;
}


//checking the conditions with function
function checkGame() {
    if (sum > 21) {

        message = "you are out of the game";
        isAlive = false;
        
    }
    else if (sum < 21) {

        message = "do you want to draw a new card";


    } else {

        message = "wooho!you have got black jack";
        hasBlackJack = true;
        

    }
    document.getElementById("message-el").textContent = "message: " + message;
}
//func to start game
function startGame() {


    firstCard = getRandomCard();
    secondCard = getRandomCard();
    //update cards array
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    //popup displaying cards using array and sum
    for (let i = 0; i < cards.length; i++) {
        document.getElementById("cards-El").textContent += cards[i] + " ";
    }
    console.log("game started");
    document.getElementById("sum-el").textContent = "sum is:" + sum;
    checkGame();
}
//resetting the game
function newGame() {
    //reset game states
    hasBlackJack = false;
    isAlive = true;
    message = "";
    sum = 0;
    //popup clearing

    document.getElementById("cards-El").textContent = "";
    document.getElementById("sum-el").textContent = "";
    document.getElementById("message-el").textContent = "";
    

}
//drawing new card
function newCard() {
    if (isAlive && !hasBlackJack) {
        console.log("drawing a new card from the deck");
        let newCard = getRandomCard();

        sum += newCard;
        cards.push(newCard);
        document.getElementById("sum-el").textContent = "sum is:" + sum;
        document.getElementById("cards-El").textContent += " " + newCard;
        checkGame();
    }

//random card function
}
function getRandomCard() {
    let randoCard = Math.floor(Math.random() * 13) + 1;
    
    //cards greater than 10 are 10 and ace or 1 is 11
    if(randoCard>10){
        return 10;
    }
    if(randoCard===1){
        return 11;
    }
    return randoCard;
}



