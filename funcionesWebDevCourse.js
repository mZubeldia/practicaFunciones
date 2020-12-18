prompt("What is your name?");
prompt("What is their name?");

function loveScore() {
    var loveScore = Math.floor(Math.random() * 100 + 1);

    if (loveScore >= 70){
        return alert("Your love score is " + loveScore + ". You'll love each other like Kanye loves Kanye.");
    } 

    if (loveScore > 30 && loveScore <= 70){
        return alert("Your love score is " + loveScore + ".");
    }
    
    if (loveScore <= 30){
        return alert("Your love score is " + loveScore + ". You better find another candidate.");
    }

} 
loveScore ();




//IBM CALCULATOR

function bmiCalculator (weight, height) {
    var interpretation = weight / Math.pow(height, 2);
    interpretation = interpretation.toFixed(2);

    if (interpretation < 18.5) {
    alert("Your BMI is " + interpretation + ", so you are underweight.")
    } 
    
    else if (interpretation >= 18.5 && interpretation <= 24.9) {
    alert("Your BMI is " + interpretation + ", so you have a normal weight.")
    }

    else if (interpretation > 24.9) {
    alert("Your BMI is " + interpretation + ", so you are overweight.")
    }

    return interpretation;

    
}

var interpretation = bmiCalculator(90, 1.80);


// Entrada a fiesta

var guestName = prompt("What is your name?");
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

if (guestList.includes(guestName)) {
    alert("Welcome, " + guestName + ". You're on the list!")
} else {
    alert("Sorry, see you next time.")
}

