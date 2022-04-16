document.addEventListener("DOMContentLoaded", () => {

    


    //card options
    
    const cardArray = [
        {
            name: "burger",
            img: "./asset/images/burger.jpg"

        },
        {
            name: "chips",
            img: "./asset/images/chips.png"

        },
        {
            name: "hotdog",
            img: "./asset/images/hotdog.jpg"

        },
        {
            name: "ice-Cream",
            img: "./asset/images/ice-cream.jpg"

        },
        {
            name: "milkshake",
            img: "./asset/images/milkshake.jpg"

        },
        {
            name: "pizza",
            img: "./asset/images/pizza.jpg"

        },
        {
            name: "burger",
            img: "./asset/images/burger.jpg"

        },
        {
            name: "chips",
            img: "./asset/images/chips.png"

        },
        {
            name: "hotdog",
            img: "./asset/images/hotdog.jpg"

        },
        {
            name: "Ice-Cream",
            img: "./asset/images/ice-cream.jpg"

        },
        {
            name: "milkshake",
            img: "./asset/images/milkshake.jpg"

        },
        {
            name: "pizza",
            img: "./asset/images/pizza.jpg"

        },
    ]


    
    cardArray.sort(() => 0.5 -Math.random()); // this is doubt as well
    //cardArray.sort(() => Math.random() * 12 );
    console.log(cardArray);
    //const backgroundAUdio = document.querySelector(".background-audio");
    
    
    
    

    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector("#result");
    cardsChosen =[];
    cardsChosenId = [];
    cardsWon = [];
    

    

    //creat board
    let createBoard = () => {
        for (let i = 0; i <cardArray.length; i++){
            const card = document.createElement("img");
            card.setAttribute("src", "./asset/images/background.jpg");
            card.setAttribute("data-id", i); // this is the doubt 
            card.addEventListener("click", flipCard);
            grid.appendChild(card);
        }
    }

    
    // check for matches
    let checkForMatch = () => {
        var cards = document.querySelectorAll("img");
        //console.log(cards);
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        //console.log(optionOneId);
       // console.log(optionTwoId);
        //console.log(cards[optionOneId]);
        //console.log(cards[optionTwoId]);
       
        // if user click same card 
        if(optionOneId === optionTwoId){
            cards[optionOneId].setAttribute("src", "./asset/images/background.jpg");
            cards[optionTwoId].setAttribute("src", "./asset/images/background.jpg");
            window.alert("you have clicked the same cards");
        
        } else if (cardsChosen[0] === cardsChosen[1]){
            window.alert("You found a match");
            cards[optionOneId].setAttribute("src", "./asset/images/win.jpg");
            cards[optionTwoId].setAttribute("src", "./asset/images/win.jpg");
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen);
        } else { // cards are different
            cards[optionOneId].setAttribute("src", "./asset/images/background.jpg");
            cards[optionTwoId].setAttribute("src", "./asset/images/background.jpg");
            window.alert("sorry, try again");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        //all cards are selected
        if (cardsWon.length == cardArray.length/2){
            resultDisplay.textContent = "Congratulation! You found them all";
        }

    }
    // flip your card
    function flipCard () {
        var cardId = this.getAttribute("data-id");
        //console.log(cardId);
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
       // console.log(cardsChosen, cardsChosenId);
        this.setAttribute("src", cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 300);
        }
    }

    createBoard();
});


