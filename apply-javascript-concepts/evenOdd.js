function checkEvenOdd (number){

    const remainder = number % 2;

    if(remainder == 0){
        console.log("Type of Data is Numeric and its a Even-Number:", number)
    }
    else if(remainder !== 0){
        console.log("Type of Data is Numeric and its a Odd-NUmber:", number)
    }
    else if(number == String){
        console.log('is a string')
    }
};

      checkEvenOdd('shaykot');  