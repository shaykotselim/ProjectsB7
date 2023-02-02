function wordReverse (text){

    const words = text.split(' ');
    // console.log(words);
    let reverseElement = [];
    for (let i = words.length - 1; i >= 0 ; i--){
        const element= words[i]
        reverseElement.push(element);
    }
    const result = reverseElement.join(' ') 
    return result;
}

const myString = 'I am a good boy';

const reverseMyString = wordReverse(myString);
console.log(reverseMyString);