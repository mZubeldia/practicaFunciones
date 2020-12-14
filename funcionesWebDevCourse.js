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
