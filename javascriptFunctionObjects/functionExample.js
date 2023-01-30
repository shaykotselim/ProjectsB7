function getAverage (asignment1, asignment2, asignment3){
    const total = asignment1 + asignment2 + asignment3;
    const average = total / 3;
    return average;

}
let asignment1Marks = 60;
let asignment2Marks = 59;
let asignment3Marks = 60;

const myAverage = getAverage(asignment1Marks, asignment2Marks, asignment3Marks);
console.log(myAverage.toFixed(2));