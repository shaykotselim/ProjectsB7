
    function updateMobileNumber(isIncrease){
        const phoneNumberField = document.getElementById('mobileInputField');
        const phoneNumberValue = phoneNumberField.value;
        const previousNumberValue = parseInt(phoneNumberValue);
        
        let newMobileNumberValue ; 
        if(isIncrease){
            newMobileNumberValue = previousNumberValue + 1;
        }else{
            newMobileNumberValue = previousNumberValue - 1;
        }
            
        phoneNumberField.value = newMobileNumberValue;

        return newMobileNumberValue;
    }

    function updateTotalPrice (newMobileNumberValue){
            const phoneTotalPrice = newMobileNumberValue * 1219;
            const totalCost = document.getElementById('phoneTotalCost');
            totalCost.innerText = phoneTotalPrice;
    }

document.getElementById('mobilePlusButton').addEventListener('click',function(){
        // const mobileNumberField = document.getElementById('mobileInputField')
        // const mobileNumberValue =mobileNumberField.value;
        // const newNumberValue = parseInt(mobileNumberValue);

        // const newMobileNumberValue = newNumberValue + 1;
           const newMobileNumberValue =  updateMobileNumber(true);

        updateTotalPrice(newMobileNumberValue)
})

document.getElementById('mobileMinusButton').addEventListener('click', function(){
    const newMobileNumberValue = updateMobileNumber(false);
    updateTotalPrice(newMobileNumberValue)
})