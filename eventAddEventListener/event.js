function makeRed (){
    document.body.style.backgroundColor ='red';
}
const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

const makeGreenBtn = document.getElementById('make-green');
makeGreenBtn.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor ='green';
})

document.getElementById('golden-rod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenRod'
});

document.getElementById('pink').addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink';
})

document.getElementById('black').addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
})

// function handleStatus (){
    const handleStatus = document.getElementById('handle-status');
    // handleStatus.innerText = 'Create handle status by dom'
// }

document.getElementById('eventListener').addEventListener('click',function(){
    const handleStatusbyEvent = document.getElementById('handle-status');
    handleStatusbyEvent.innerText = 'Create Handle Status by Event LIstener'
})