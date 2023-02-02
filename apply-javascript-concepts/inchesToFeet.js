function inchesToFeet (inches){
    let feet = inches / 12;
    return feet;
}

const dadaFeet = 144;
let totalFeet = inchesToFeet(dadaFeet);
console.log(totalFeet);