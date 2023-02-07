/***                            Basic Problems:
*
*                       1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।
 */ 
    
    // function ntotal (n){
    //     let sum = 0;
    //     for (let i = 1; i <=n; i++){
    //         sum =sum +i;
    //     }
        
    //     return sum ;

    // }

    // const totalSum = ntotal(12)
    // console.log(totalSum)

                      //৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে।  
    // function namta (num){

    //     for(let i = 1; i<=10; i++ ){
            
    //         let multiplication = i * num;
    //         console.log('=:',multiplication)
    //     }

    // }
    // namta(3)

/**
 *      এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট 
 *      হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ 
 *      এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

        ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]

        আউটপুটঃ 3
 */

        const myNumbers = [-1,2,-3,4,5,6,-7,8,-9,10];
                
        function myfunction (myNumbers){
            let num = 0;
            for (let i = 0; i<myNumbers.length; i++){
                let index = myNumbers[i]
                if( index > 5){
                    num = num + 1;
                }
            }
                
                return num;
        }
                        
        console.log(myfunction(myNumbers));