const Api_Key = `165eeb0c401680e46a2de9c883280463`
        
const lodeTemperature = async(city)=>{
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`
    try{
        
        const res = await fetch(url);
        const data = await res.json();
        displayData(data);
    }
    catch(error){
        console.log(error);
    }
}




const displayData = (temp)=> {
    console.log(temp.main.temp);
    // const temperaturId = document.getElementById('tempId');
    // const idCity = document.getElementById('cityId');
    // temperaturId.innerText = `${temp.main.temp   }`
    // idCity.innerText = `${temp.name}`
    setInnerTextById('tempId', temp.main.temp)
    setInnerTextById('cityId', temp.name)
    setInnerTextById('condition',temp.weather[0].main )
}
const setInnerTextById =(id, text)=>{
    const setId = document.getElementById(id);
        setId.innerText = text;
}
document.getElementById('search-button').addEventListener('click',function(){
    const inputField = document.getElementById('input-field')
    
    const inputValue = inputField.value;
    
    lodeTemperature(inputValue)
        
    
})

lodeTemperature('dhaka')
