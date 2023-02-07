/*
১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
*/
function feetToInch(feet){
    const inch = feet /12;
    return inch;
}

// feetToInch(23);
// console.log(feetToInch(23).toFixed(2));

/**
 * ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।
 */
 
// Note: 100 centimeter = 1 meter;
//         1 centimeter = 0.01 meter;
//       1 meter = 100 centemeter;

function centimeterToMeter (cen){
        const meater = cen / 100;
        return meater;
}

// console.log(centimeterToMeter(10).toFixed(2))

/**
 * ৩. 
 * আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

উত্তর হিসেবে সংখ্যা রিটার্ন করবে।
 
*/

function paperRequirements (first ,second, third){
            const firstPrint = first * 100;
            const secondPrint = second * 200;
            const thirdPrint = third * 300;
        const totalPaper = firstPrint + secondPrint + thirdPrint;

        return totalPaper;

}
// console.log(paperRequirements(2, 3, 4,))

// let name = 'selim';
// let age = 24; 
// let id = 1023;

// const person = {name, age , id}

// console.log(person);
/**
 * ৪.
 *একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।
 */
    

   
 function bestFriend(arra){
    //let myFriend = ['']
      let maxArray = arra[0].length;
      let ans = arra[0];      
    for(let i = 0; i<arra.length; i++){
                let index = arra[i].length;
                if(index > maxArray){
                    ans = arra[i];
                }
            }
            return ans;
        }
        const myArray = ['Nisan', 'Eamin', 'Shaykot', 'Mosharof', 'Hriodoy paul'];
        let friend = bestFriend(myArray);
        console.log(friend)
