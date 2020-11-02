function getAverage (a, b, c, d, e, f) {

    var average = (a + b + c + d + e + f) / 6;
    console.log(average);
    return average;

}

var myResult = getAverage(7, 12, 11, 3, 4, 5);

console.log("The average is " + myResult);