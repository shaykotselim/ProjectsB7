
document.getElementById('eventListener').addEventListener('click', function(){
     const getfirstStatus = document.getElementById('firstStatus');
     getfirstStatus.innerText = 'To Update By Event Listener'
});

function addOnClick(){
        const getSecondStatus = document.getElementById('secondStatus');
        getSecondStatus.innerText = 'To Update By Onclick';
}

document.getElementById('updateBtn').addEventListener('click', function(){
                const getInputFild = document.getElementById('inputField');
                const paraText = document.getElementById('paraStatus');
                paraText.innerText = getInputFild.value
})

document.getElementById('updatePost').addEventListener('click', function(){
        const getTextInput = document.getElementById('newText');
        // const newTextcomment = getTextInput.value;

        const getNewPost = document.getElementById('post-container');
        const newparapost = document.createElement('p');
        newparapost.innerText = getTextInput.value;

        getNewPost.appendChild(newparapost);
        const newpostText=  document.createElement('p');

        getTextInput.value = '';

})

document.getElementById('deleteInputText').addEventListener('keyup', function(event){

                const text = event.target.value;
                const deleteBtn = document.getElementById('deleteBtn');
                if(text === 'delete'){
                        deleteBtn.removeAttribute('disabled');
                }else{
                        deleteBtn.setAttribute('disabled',true)
                }
        

})
document.getElementById('deleteBtn').addEventListener('click',function(){
        const mySecretInfo = document.getElementById('mySecret');
        mySecretInfo.style.display = 'none';

})