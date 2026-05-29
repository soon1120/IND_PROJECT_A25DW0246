// Calculator

function add(){

    let num1 =
    Number(document.getElementById("num1").value);

    let num2 =
    Number(document.getElementById("num2").value);

    document.getElementById("calcResult").innerHTML =
    "Answer: " + (num1 + num2);
}

function subtract(){

    let num1 =
    Number(document.getElementById("num1").value);

    let num2 =
    Number(document.getElementById("num2").value);

    document.getElementById("calcResult").innerHTML =
    "Answer: " + (num1 - num2);
}

function multiply(){

    let num1 =
    Number(document.getElementById("num1").value);

    let num2 =
    Number(document.getElementById("num2").value);

    document.getElementById("calcResult").innerHTML =
    "Answer: " + (num1 * num2);
}

function divide(){

    let num1 =
    Number(document.getElementById("num1").value);

    let num2 =
    Number(document.getElementById("num2").value);

    document.getElementById("calcResult").innerHTML =
    "Answer: " + (num1 / num2);
}


// BMI

function checkBMI(){

    let weight =
    Number(document.getElementById("weight").value);

    let height =
    Number(document.getElementById("height").value);

    height = height / 100;

    let bmi = weight / (height * height);

    let category = "";

    if(bmi < 18.5){

        category = "Underweight";
    }

    else if(bmi < 25){

        category = "Normal";
    }

    else if(bmi < 30){

        category = "Overweight";
    }

    else{

        category = "Obese";
    }

    document.getElementById("bmiResult").innerHTML =
    "Your BMI is: " +
    bmi.toFixed(2) +
    " (" + category + ")";
}


// Tax

function calculateTax(){

    let income =
    Number(document.getElementById("income").value);

    let tax = income * 0.05;

    document.getElementById("taxResult").innerHTML =
    "Estimated Tax: RM " + tax;
}


// Converter

function cmToMeter(){

    let value =
    Number(document.getElementById("unitInput").value);

    document.getElementById("unitResult").innerHTML =
    value / 100 + " meter";
}

function meterToCm(){

    let value =
    Number(document.getElementById("unitInput").value);

    document.getElementById("unitResult").innerHTML =
    value * 100 + " cm";
}

function meterToKm(){

    let value =
    Number(document.getElementById("unitInput").value);

    document.getElementById("unitResult").innerHTML =
    value / 1000 + " km";
}

function kmToMeter(){

    let value =
    Number(document.getElementById("unitInput").value);

    document.getElementById("unitResult").innerHTML =
    value * 1000 + " meter";
}