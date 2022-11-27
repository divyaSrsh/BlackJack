let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let msgEl=document.getElementById("msg-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

let player={
    name: "Div",
    chips: 135
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + ": $"+player.chips

function getRandomCard(){
    let randomCard= Math.floor(Math.random()*13)+1
    if(randomCard===1){
        return  11
    }else if(randomCard>10){
        return 10
    }else{
        return randomCard
    }
}

function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    let cards=[firstCard, secondCard]
    let sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent="Cards : "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum :"+sum
    if(sum<=20){
        message="Do you want to draw a new card? "
    }else if(sum === 21){
        message="Wohoo! You've got Blackjack!"
        hasBlackJack=true
    }else{
        message="you are out of the game!"
        isAlive=false
    }
    msgEl.textContent=message   
}


function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }  
   
}
