/**
 * ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।
 */

const stringVariable = 'Shaykot';
const boolearVariable = true;
const numericVariable = 1023;

// ceck variable DataType;

//console.log(typeof(stringVariable));//string
//console.log(typeof(boolearVariable));//boolean
//console.log(typeof(numericVariable));//number

/**
 * ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।
 */
        //let variable
//When variable value is changing then use let variable ;
let age = 24;

        /// const variable
// When variable value is not changing then use const variable;
const name = "Sahykot Hossain Seliljm";

/**
 * ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।
 */

    let num1 = 23;
    let num2 = 32;
    let addedOfNumber = num1 + num2;
    let multiplyNumber = num1*num2;
    // console.log('Added:',addedOfNumber);
    // console.log('Multiply:',multiplyNumber);
    
    let deflorationNumber = multiplyNumber - addedOfNumber;
    let dividedNumber = multiplyNumber / addedOfNumber;
    let reminderNumber = multiplyNumber % addedOfNumber;
    // console.log('Defloration:', deflorationNumber);
    // console.log('Divied:',dividedNumber.toFixed(2));
    // console.log('Reminder:',reminderNumber.toFixed(3));

/**
 * ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 
 */
 const lessThan = num1 < num2;
//  console.log(lessThan);
 const getterThan = num1 > num1;
//  console.log(getterThan);
 const notEqual = num1 != num2;
//  console.log(notEqual);
 const equal = num1 == num2;
//  console.log(equal);

 const lessThanEqual = num1 <= num2;
//  console.log(lessThanEqual);

 const getterThanEqual = num1 >= num2;
//  console.log(getterThanEqual);

/**
    ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।
*/
 if( num1 === num2 && num1 < num2){
    // console.log('They are Same;');
 }

 else if ( num1 < num2 || num1 == num2 ){
    // console.log('one condition here');
 }
 else{
    // console.log('else here');

}

/**
 * ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো
 */

/**
 * ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।
 */
let number = 7;
while(number <= 19 ){
        number+= 2;
        // console.log(number);
};

/* 
৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।
*/
let numbers = [12, 33, 44, 55, 65, 66,77,88,99];

const elementOfnumber = numbers.length;
numbers[3] = 10;
// console.log(elementOfnumber);

numbers.push(81);
numbers.unshift(121);
numbers.pop();
// console.log(numbers);

// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

const numberArray = [ 12, 33, 4, 44, 555, 666, 66776, 888, 99];

for (let i = 0; i <numberArray.length; i++){
        //   let element = numberArray[i];  
        // console.log(numberArray[i]);
}


/**
 * ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো
 */

    let element = [];
    for (let i = 0; i < numberArray.length; i++ ){

        let index = numberArray[i]
        if( index > 80){
            element.push(index);
        }
    }
    // console.log(element);

    /**
     * ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।
     */

    function threeNumMultiply ( num1, num2, num3){
                let totalNumber = num1 * num2 * num3;
                return totalNumber;
    }

    const firstNumber = 32;
    const secondNumber = 43; 
    const thirdNumber = 56;

    let totalSum = threeNumMultiply(firstNumber, secondNumber, thirdNumber); 
    // console.log( totalSum)

    /**
     * ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।
     */

    let changeObject = {name:'shaykot', id: 1023, section:'A'}

    changeObject.name = 'selim';
    console.log(changeObject);