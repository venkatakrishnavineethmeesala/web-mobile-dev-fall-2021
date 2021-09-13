let UserScore = 0;
let ComScore = 0;
const User_Score = document.getElementById("user_score");
const Com_Score = document.getElementById("computer_score");
const text = document.querySelector(".text_display > p ");
const rock_id = document.getElementById("rock");
const paper_id = document.getElementById("paper");
const scissor_id = document.getElementById("scissor");

function win(userchoice, comchoice){
    UserScore++;
    User_Score.innerHTML = UserScore;
    Com_Score.innerHTML = ComScore;
    text.innerHTML = "user wins!!";
}
function lose(userchoice, comchoice){
    ComScore++;
    User_Score.innerHTML = UserScore;
    Com_Score.innerHTML = ComScore;
    text.innerHTML = "computer wins!!";
}
function draw(userchoice, comchoice){
    User_Score.innerHTML = UserScore;
    Com_Score.innerHTML = ComScore;
    text.innerHTML = "its a tie!";
}

 function comchoice(){
    const choices = ["rock", "paper", "scissor"]
    const random_numer = Math.floor(Math.random()*3)
    return choices[random_numer]
}
function match(user_choice){
    const computer = comchoice();
    switch (user_choice+computer) {
        case "rockscissor":
        case "scissorpaper":
        case "paperrock":
            console.log("user wins");
            win(user_choice, computer);
            break;
        case "rockrock":
        case "scissorscissor":
        case "paperpaper":
            console.log("its a tie.");
            draw(user_choice, computer);
            break;
        case "scissorrock":
        case "paperscissor":
        case "rockpaper":
            console.log("its a lose");
            lose(user_choice, computer);
            break;
        }
    }


function main(){
    rock_id.addEventListener("click", function(){
        match('rock');
    } )
    paper_id.addEventListener("click", function(){
        match('paper');
    } )
    scissor_id.addEventListener("click", function(){
        match('scissor');
    } )
}

main();