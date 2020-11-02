function getAverage (a, b) {

    // average is a local variable

    var average = (a + b) / 2; 
    console.log(average);
    return average;

}

// myResult is a global variable

var myResult = getAverage(7, 11);

function logResult () {

    console.log("The average is " + myResult + " inside the function.");

}

logResult();