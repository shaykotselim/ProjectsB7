const numbers = [12, 222, 22, 344, 55];

const doubleIt = num => num *2;

function doubelNumber (){
    let outputNumber = [];
    for (number of numbers){
        let numberMultiply = number * 2;
        outputNumber.push(numberMultiply)
    }
    return outputNumber;

}

console.log(doubelNumber(numbers));

const doubleNewNumber = numbers.map(doubleIt);
console.log(doubleNewNumber)