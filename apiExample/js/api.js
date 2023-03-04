function lodeData (){
    fetch("https://api.kanye.rest/")
    .then(res => res.json())
    .then(data => displayData(data))
}


const displayData = (data)=> {
    const blockQuote = document.getElementById("block-Quote");
    // const p = document.createElement('p');
    // p.innerText =`${data.quote}`
    // blockQuote.appendChild(p) 
    blockQuote.innerHTML = data.quote
}
lodeData()