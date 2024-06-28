

var winner1 = localStorage.getItem('winner1') ? parseInt(localStorage.getItem('winner1')) : 0;
var winner2 = localStorage.getItem('winner2') ? parseInt(localStorage.getItem('winner2')) : 0;

document.querySelector(".p1").innerHTML = `Player 1: ${winner1}`;
document.querySelector(".p2").innerHTML = `Player 2: ${winner2}`;



// 1 = rock     2 = scissors    3 = paper
function playgame(){
    var n = Math.random();
    n = n  * 3;
    var randomNumber1 = Math.floor(n+1);

    var n2 = Math.random();
    n2 = n2  * 3;
    var randomNumber2 = Math.floor(n2+1);
    var randomNumber2;

    if(randomNumber1 === 1){
        document.querySelector("img.img1").setAttribute("src", "./images/rock.png");
    }
    else if(randomNumber1 === 2){
        document.querySelector("img.img1").setAttribute("src", "./images/scissors.png");
    }
    else if(randomNumber1 === 3){
        document.querySelector("img.img1").setAttribute("src", "./images/paper.png");
    }
    if(randomNumber2 === 1){
        document.querySelector("img.img2").setAttribute("src", "./images/rock.png");
    }
    else if(randomNumber2 === 2){
        document.querySelector("img.img2").setAttribute("src", "./images/scissors.png");
    }
    else if(randomNumber2 === 3){
        document.querySelector("img.img2").setAttribute("src", "./images/paper.png");
    }
    
    
    if(randomNumber1 === 1){
        if(randomNumber2 === 2){
            document.querySelector("h1").style.color = "#94FFD8"
            document.querySelector("h1").innerHTML = "Player 1 Wins The Round!";
            winner1++;
            document.querySelector(".p1").innerHTML = `Player 1: ${winner1}`;
        }
        else if(randomNumber2 === 3){
            document.querySelector("h1").style.color = "#94FFD8"
            document.querySelector("h1").innerHTML = "Player 2 Wins The Round!";
            winner2++;
            document.querySelector(".p2").innerHTML = `Player 2: ${winner2}`;
        }
        else if(randomNumber2 === 1){
            document.querySelector("h1").style.color = "#94FFD8"
            document.querySelector("h1").innerHTML = "Draw!";
        }
    }
    else if(randomNumber1 === 2){
        if(randomNumber2 === 3){
            document.querySelector("h1").style.color = "#94FFD8"
            document.querySelector("h1").innerHTML = "Player 1 Wins The Round!";
            winner1++;
            document.querySelector(".p1").innerHTML = `Player 1: ${winner1}`;
        }
        else if(randomNumber2 === 1){
            document.querySelector("h1").style.color = "#94FFD8"
            document.querySelector("h1").innerHTML = "Player 2 Wins The Round!";
            winner2++;
            document.querySelector(".p2").innerHTML = `Player 2: ${winner2}`;
        }
        else if(randomNumber2 === 2){
            document.querySelector("h1").style.color = "#94FFD8"
            document.querySelector("h1").innerHTML = "Draw!";
        }
    }
    else if(randomNumber1 === 3){
        if(randomNumber2 === 1){
            document.querySelector("h1").style.color = "#94FFD8"
            document.querySelector("h1").innerHTML = "Player 1 Wins The Round!";
            winner1++;
            document.querySelector(".p1").innerHTML = `Player 1: ${winner1}`;
        }
        else if(randomNumber2 === 2){
            document.querySelector("h1").style.color = "#94FFD8"
            document.querySelector("h1").innerHTML = "Player 2 Wins The Round!";
            winner2++;
            document.querySelector(".p2").innerHTML = `Player 2: ${winner2}`;
        }
        else if(randomNumber2 === 3){
            document.querySelector("h1").style.color = "#94FFD8"
            document.querySelector("h1").innerHTML = "Draw!";
        }
    }
}
