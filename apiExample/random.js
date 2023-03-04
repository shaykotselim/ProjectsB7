const randomUsers = () =>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUsers(data));
}

const displayUsers =(data) =>{
    //   console.log(data.results[0].name.title);
    console.log(data.results[0].name)
    console.log(data.results[1])
}

randomUsers()