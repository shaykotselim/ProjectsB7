const products = [ 
    {id:1, name:'mobile', price: 14000, brand:'Realme'},
    {id:2, name:'Laptop', price: 43500, brand:'Dell'},
    {id:3, name:'Mouse', price: 11000, brand:'Logitec'},
    {id:4, name:'Keyboard', price: 14000, brand:'RedDragon'},
];


const prices = products.map(product => product.name);
console.log(prices)