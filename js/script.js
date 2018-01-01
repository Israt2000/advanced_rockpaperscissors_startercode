//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
var choices = "";
var computerChoice ="";
var userChoice ="";
var winner = "";
 
console.log(choices);
console.log(computerChoice);
console.log(userChoice);
console.log(winner);

//FUNCTIONS
var moves = ["Rock", "Paper", "Scissors"];
var randomwholeNum = Math.floor(Math.random()*moves.length);
var computer move = (moves[randomWholeNum]);
$("button").click(function(){
        var inputusername = $("#usermove").val();
}
(if computermove === "Rock" && usermove === "Rock"){
        $("thewiner").append("No Wins");
}
(if computermove === "Rock" && usermove === "Paper"){
        $("thewiner").append("No Wins");
}
(if computermove === "Rock" && usermove === "Scissors"){
        $("thewiner").append("No Wins");
}
(if computermove === "Paper" && usermove === "Rock"){
        $("thewiner").append("No Wins");
}
(if computermove === "Paper" && usermove === "Paper"){
        $("thewiner").append("No Wins");
}
(if computermove === "Paper" && usermove === "Scissors"){
        $("thewiner").append("No Wins");
}
(if computermove === "Scissors" && usermove === "Rock"){
        $("thewiner").append("No Wins");
}
(if computermove === "Scissors" && usermove === "Paper"){
        $("thewiner").append("No Wins");
}
(if computermove === "Scissors" && usermove === "Scissors"){
        $("thewiner").append("No Wins");
}

// DOCUMENT READY FUNCTION

