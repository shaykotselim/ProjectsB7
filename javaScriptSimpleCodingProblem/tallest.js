function maxInArray (numbers){
    let largest = [0];
        for(let i = 0; i < numbers.length; i++){
            
            const element = numbers[i];
            // console.log(element);
            if( element > largest ){
                largest = element;
            } 
        }
        return largest;
}

const height = [167, 190, 120, 165, 137, 223];
const tallest = maxInArray(height);
console.log(tallest)