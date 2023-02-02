 function getSumOfAnArray (numbers){

        let sum = 0;
        for(let i =0; i <numbers.length; i++ ){
            let index = i;
            let element = numbers[index]
            sum = sum + element;
            // console.log(index);
            // console.log(index, element, sum)
        }
        return sum;

}
 


function oddNumber (numbers){
    
    let sum = [];

    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index] ;

        if( element % 2 == 1 ){
            // console.log(index, element);
            sum.push(element);
        }
    }
    return sum;
}

const myNumber = [12, 65, 45, 78, 32, 45,91];

const oddSum = oddNumber(myNumber);
// console.log(oddSum);
const totalOddSum = getSumOfAnArray(oddSum);
console.log(totalOddSum);