document.getElementById('applyButton').addEventListener('click',function(){
        // console.log('clicked')
        const friends = document.querySelectorAll('p');
        // friends.style.backGroundColor="black"
        // for (const friend of friends){
            friends.style.color = 'blue'
        //     friend.style.backgroundColor = 'black'
        //     friend.style.width = '20%'
        //     friend.style.textAlign = 'center'
        // }
        // console.log(friends)
        // friends.style.backgroundColor = 'blue';
        //     friend.style.backgroundColor = 'black'
        //     friend.style.width = '20%'
        //     friend.style.textAlign = 'center'
        console.log(typeof(friends));


});
document.getElementById('addedButton').addEventListener('click', function(){

        const firendsElement = document.getElementById('friends');

        const createFriend = document.createElement('div');
        createFriend.innerHTML = `
            <h3 class="friend-name">Friend{$}</h3>
            <p> This is shaykot hossain</p>
        `
        firendsElement.appendChild(createFriend);
})