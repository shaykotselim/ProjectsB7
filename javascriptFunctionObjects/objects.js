let myComputer ={
        brand: 'hp',
        price: 43500,
        color: 'silver',
        processor: 'core i3'
};

// console.log(myComputer);
// console.log(myComputer.color);
// myComputer.processor = 'core i5'
// console.log(myComputer.processor);

myComputer.price = 4500;

let propertyName = myComputer['silver'] = 'red';

myComputer['hp'] = 'dell';

console.log(myComputer);
