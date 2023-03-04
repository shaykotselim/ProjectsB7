const lodePhones = async (searchTex) =>{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchTex}`
        const res = await fetch(url);
        const data = await res.json();
        displayPhone(data.data);
}

const displayPhone = (phones) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = '';
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('clo');
        phoneDiv.innerHTML = `
        <div class="card">
            <img  src="${phone.image}" class="card-img-top w-50 m-auto mt-5" alt="...">
            <div class="card-body">
                <h3 class="card-title">${phone.phone_name}</h3>
                <h5>${phone.brand}</h5>
                <p class="card-text">${phone.slug}</p>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv)
    })
}
    document.getElementById('searchBtn').addEventListener('click',function(){
        const inputField = document.getElementById('searchInput');
        const inputText = inputField.value;
        lodePhones(inputText);
    })

lodePhones();