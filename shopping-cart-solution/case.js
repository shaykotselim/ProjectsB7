// declar  function for mobile case

function updateCaseNumber (isIncrease){
    const caseNumberField = document.getElementById('caseInputField'); 
    const caseNumberValue = caseNumberField.value;    
    const previousNumber = parseInt(caseNumberValue);

    let newCaseNumber;

        if(isIncrease){
             newCaseNumber = previousNumber + 1;
            
       }else{
           newCaseNumber= previousNumber - 1;
       }

       caseNumberField.value = newCaseNumber;

        return newCaseNumber;
    }
    
    function updateCaseTotalPrice (newCaseNumber){
        
        const caseTotalPrice = newCaseNumber * 59;
        const totalCost =document.getElementById('total-cost');
        totalCost.innerText = caseTotalPrice;
    }


document.getElementById('casePlusButton').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(true);
       
    updateCaseTotalPrice(newCaseNumber);
      
});

document.getElementById('caseMinusButton').addEventListener('click',function(){
 const newCaseNumber = updateCaseNumber(false);

   
    updateCaseTotalPrice(newCaseNumber)
 // const caseTotalPrice = newCaseNumber * 59;
    // const totalCost = document.getElementById('total-cost');
    // totalCost.innerText = caseTotalPrice;

});





document.getElementById('mobilePlusButton').addEventListener('click', function(){
    // updateCaseNumber(true);
});
document.getElementById('mobileMinusButton').addEventListener('click',function(){
    // updateCaseNumber(false);
})