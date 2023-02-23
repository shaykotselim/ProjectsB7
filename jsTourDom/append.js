console.log('append js');
const palcesList = document.getElementById('furitsList');
const li = document.createElement('li');
    li.innerText = 'Onion';
    palcesList.appendChild(li)

    console.log(palcesList);

const mainSection = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Places I like';
section.appendChild(h1);

const newUl = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'BadarBan';
newUl.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'SundarBan';
newUl.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Shylet';
newUl.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Shajek';
newUl.appendChild(li4);

const li5 = document.createElement('li');
li5.innerText = 'KuaKata';
newUl.appendChild(li5);

section.appendChild(newUl);
mainSection.appendChild(section);


console.log(section)