
var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");


var answer = Math.floor(Math.random()*100) + 1;
var noGuesses = 0;
var guessed_nums = [];

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100){
        alert("Please enter a number between 1 and 100.");
    }
    else{
        guessed_nums.push(user_guess);
        noGuesses+= 1;
        console.log("hello");
        if (noGuesses < 5) {
            if(user_guess < answer){
                msg1.textContent = "Hint: Lower, Use binary Search";
                msg2.textContent = "You have Guessed: " + noGuesses;
                msg3.textContent = "Guessed numbers are: " +
                guessed_nums;
            }
            else if(user_guess > answer){
                msg1.textContent = "Hint: Higher,Use binary Search";
                msg2.textContent = "You have Guessed: " + noGuesses;
                msg3.textContent = "Guessed numbers are: " +
                guessed_nums;
            }
            else if(user_guess == answer){
                msg1.textContent = "Wonderful";
                msg2.textContent = "The number was: " + answer;
                msg3.textContent = "Guessed Numbers are "+ noGuesses + " guesses";
                document.getElementById("my_btn").disabled = true;
                alert("Game over, you win.");
            }
        } else {
            msg1.textContent = "Game over, you are lose.";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "Guessed numbers are: " + guessed_nums;
            alert("Game over, you are lose.");
        }
    }
}

function reset() {
    document.getElementById("guess").value = "1-100";
    msg1.textContent = "You have Guessed: 0";
    msg2.textContent = "Guessed Numbers are: None";
    msg3.textContent = "";
}
    

