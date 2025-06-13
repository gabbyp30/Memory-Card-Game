const colImages = document.querySelectorAll(".card-front") 
console.log(colImages) 
const img = document.querySelectorAll('#front-card') 
console.log(img)

let flippedCount = 0;

function flipCard(index, imgPath) {
    if (flippedCount < 2 && !colImages[index].classList.contains("card-inner")) {
        console.log('Card flipped!');
        colImages[index].classList.add("card-inner");
        img[index].setAttribute("src", imgPath);
        flippedCount++;
    } else {
        console.log('Only two cards can be flipped at a time.');
    }
}

let count = 0;
img[0].addEventListener('click', () => flipCard(0, "./Images/babyE.jpg"));
img[1].addEventListener('click', () => flipCard(1, "./Images/babyA.jpg"));
img[2].addEventListener('click', () => flipCard(2, "./Images/pizza.jpg"));
img[3].addEventListener('click', () => flipCard(3, "./Images/black.jpg"));
img[4].addEventListener('click', () => flipCard(4, "./Images/babyE.jpg"));
img[5].addEventListener('click', () => flipCard(5, "./Images/babyA.jpg"));
img[6].addEventListener('click', () => flipCard(6, "./Images/pizza.jpg"));
img[7].addEventListener('click', () => flipCard(7, "./Images/black.jpg"));
img[8].addEventListener('click', () => flipCard(8, "./Images/brunch.jpg"));
img[9].addEventListener('click', () => flipCard(9, "./Images/blue.jpg"));
img[10].addEventListener('click', () => flipCard(10, "./Images/orange.jpg"));
img[11].addEventListener('click', () => flipCard(11, "./Images/mtsmoke.jpg"));
img[12].addEventListener('click', () => flipCard(12, "./Images/blue.jpg"));
img[13].addEventListener('click', () => flipCard(13, "./Images/mtsmoke.jpg"));
img[14].addEventListener('click', () => flipCard(14, "./Images/brunch.jpg"));
img[15].addEventListener('click', () => flipCard(15, "./Images/orange.jpg"));

let flippedCards = [];

function flipCard(index) {
    if (flippedCount < 2 && !colImages[index].classList.contains("card-inner")) {
        colImages[index].classList.add("card-inner");
        img[index].setAttribute("src", img[index].dataset.imgPath);
        flippedCards.push({ index, imgPath: img[index].dataset.imgPath });
        flippedCount++;

        if (flippedCount === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.imgPath === card2.imgPath) {
        console.log("It's a match!");
        
    } else {
        console.log("Not a match.");
        colImages[card1.index].classList.remove("card-inner");
        img[card1.index].setAttribute("src", "./Images/hearts.webp");

        colImages[card2.index].classList.remove("card-inner");
        img[card2.index].setAttribute("src", "./Images/hearts.webp");
    }

    
    flippedCards = [];
    flippedCount = 0;
}

let matchedPairs = 0;
const totalPairs = img.length / 2;

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.imgPath === card2.imgPath) {
        console.log("It's a match!");
        matchedPairs++;

        if (matchedPairs === totalPairs) {
            showVictoryAnimation();
        }
    } else {
        console.log("Not a match.");
        colImages[card1.index].classList.remove("card-inner");
        img[card1.index].setAttribute("src", "./Images/hearts.webp");

        colImages[card2.index].classList.remove("card-inner");
        img[card2.index].setAttribute("src", "./Images/hearts.webp");
    }

    flippedCards = [];
    flippedCount = 0;
}

function showVictoryAnimation() {
    const victoryScreen = document.createElement("div");
    victoryScreen.style.position = "fixed";
    victoryScreen.style.top = "0";
    victoryScreen.style.left = "0";
    victoryScreen.style.width = "100vw";
    victoryScreen.style.height = "100vh";
    victoryScreen.style.background = "rgba(0, 0, 0, 0.8)";
    victoryScreen.style.color = "white";
    victoryScreen.style.display = "flex";
    victoryScreen.style.alignItems = "center";
    victoryScreen.style.justifyContent = "center";
    victoryScreen.style.fontSize = "2em";
    victoryScreen.style.zIndex = "1000";
    victoryScreen.innerHTML = "🎉 YAY,You've matched my family! 🎉";

    document.body.appendChild(victoryScreen);

    setTimeout(() => {
        victoryScreen.remove();
        resetGame();
    }, 3000); 
}

function resetGame() {
    matchedPairs = 0;
    flippedCards = [];
    flippedCount = 0;
    colImages.forEach((card, index) => {
        card.classList.remove("card-inner");
        img[index].setAttribute("src", "./Images/hearts.webp");
    });
}

document.getElementById("restartBtn").addEventListener("click", resetGame);

function resetGame() {
    matchedPairs = 0;
    flippedCards = [];
    flippedCount = 0;

    colImages.forEach((card, index) => {
        card.classList.remove("card-inner");
        img[index].setAttribute("src", "./Images/hearts.webp");
    });

    document.querySelector(".score").textContent = "0";
}

let score = 0;
document.querySelector(".score").textContent = score;

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.imgPath === card2.imgPath) {
        console.log("It's a match!");
        matchedPairs++;

       
        score += 10; 
        document.querySelector(".score").textContent = score;

        if (matchedPairs === totalPairs) {
            showVictoryAnimation();
        }
    } else {
        console.log("Not a match.");
        colImages[card1.index].classList.remove("card-inner");
        img[card1.index].setAttribute("src", "./Images/hearts.webp");

        colImages[card2.index].classList.remove("card-inner");
        img[card2.index].setAttribute("src", "./Images/hearts.webp");
    }

    flippedCards = [];
    flippedCount = 0;
}

function resetGame() {
    matchedPairs = 0;
    flippedCards = [];
    flippedCount = 0;
    score = 0;
    document.querySelector(".score").textContent = score;

    
    const imgPaths = [
        "./Images/babyE.jpg", "./Images/babyA.jpg",
        "./Images/pizza.jpg", "./Images/black.jpg",
        "./Images/babyE.jpg", "./Images/babyA.jpg",
        "./Images/pizza.jpg", "./Images/black.jpg",
         "./Images/orange.jpg", "./Images/mtsmoke.jpg",
        "./Images/brunch.jpg", "./Images/blue.jpg",
        "./Images/mtsmoke.jpg", "./Images/orange.jpg",
        "./Images/blue.jpg", "./Images/brunch.jpg"
    ];
    
    imgPaths.sort(() => Math.random() - 0.5); 

    colImages.forEach((card, index) => {
        card.classList.remove("card-inner");
        img[index].setAttribute("src", "./Images/hearts.webp"); 
        img[index].dataset.imgPath = imgPaths[index]; 
    });
}

