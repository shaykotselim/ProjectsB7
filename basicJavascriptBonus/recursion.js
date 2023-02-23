
function sum (i){
    if(i === 1){
        return 1;
    }
    else{
        return i + sum(i-1);
    }
}
const result = sum(3);
console.log(result);
