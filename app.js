var choices = ['rock', 'paper', 'scissors']
var results = document.getElementById('results')
function play(userChoice) {
    var choiceI = Math.floor(Math.random() * 2)//multiply by two and round down makes choiceI 0,1,2, corresonds to the INDEX
    var compChoice = choices[choiceI]

    if (userChoice == compChoice) {
        console.log('TIE')
        results.innerHTML = `
        <p>player chose: ${userChoice},   computer chose: ${compChoice}</p>
        <p> it's a tie!</p>
        `
      
    }
    else {
        if (userChoice == 'rock') {
            if (compChoice == 'paper') {
                console.log("I LOSE")
                results.innerHTML = `
            <p>player chose: ${userChoice}, computer chose: ${compChoice}</p>
            <p> You lose!</p>
        
            `
            } else {
                console.log("I WIN")
                results.innerHTML = `
            <p>player chose: ${userChoice}, computer chose: ${compChoice}</p>
        <p> I win!</p>
        
            `
            }
        }
        if (userChoice == 'paper') {
            if (compChoice == 'scissors') {
                console.log("I LOSE")
                results.innerHTML = `
            <p>player chose: ${userChoice}, computer chose: ${compChoice}</p>
        <p> i lose!</p>
        
            `
            } else {
                console.log("I WIN")
                results.innerHTML = `
            <p>player chose: ${userChoice}, computer chose: ${compChoice}</p>
        <p> i win!</p>
        
            `
            }
        }
        if (userChoice == 'scissors') {
            if (compChoice == 'rock') {
                console.log("I LOSE")
                results.innerHTML = `
            <p>player chose: ${userChoice}, computer chose: ${compChoice}</p>
        <p> i lose!</p>
        
            `
            } else {
                console.log("I WIN")
                results.innerHTML = `
            <p>player chose: ${userChoice}, computer chose: ${compChoice}</p>
        <p> i win</p>!
        
            `
            }
        }
    }
}




// var play = function (compChoice) {
//     x = math.random() 
//     var rock <= .34;
//     if (play <= "rock", {
//         alert(tie)
//     }
//     else if (play > .34 && <= .69) {
//         alert(you lose)
//     }
//     else if (play >== .70){
//         alert(you win)
//     }
// }


// var rock <== .34;
// var paper > .34 && <==.69;
// var scissors >== .70;


// function('rock'){

// } 


// var rock <== .34;
// var paper > .34 && <==.69;
// var scissors >== .70;

// var p = "paper"
// var s ="scissors"

// var cc = Math.random;
// var pc = ();


// (if ((pc == "r") 
//     if cc === "r", alert("Tie")
//         else if cc === "p", alert ("You Lose")
//         else if cc === "s", alert ("You Win")
// )
// else if((pc == "s")
//     (if cc === "p", alert("You Win")
//         else if cc === "r", alert ("You Lose")
//         else if cc === "s", alert ("Tie")
// )

// else if((pc == "p")
//     (if cc === "p", alert("Tie")
//         else if cc === "s", alert ("You Lose")
//         else if cc === "r", alert ("You Win)
// )

