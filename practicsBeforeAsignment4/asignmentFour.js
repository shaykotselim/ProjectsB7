    /** 
        * Number of Problem 1;
        
        * Description : 
        * This function describe (inputvalues * 3 then + 10 after that / 2 finaly - 5);
        * And when we call function mindGame() then function will return a value;   
    */
        function mindGame(num){
                if( typeof(num) !== 'number'){
                    return 'Please give a number values';
                }
            
                else{
                    
                let multiply = num * 3;
                let tenAdd = multiply + 10;
                let dividedTow= tenAdd / 2;
                let total = dividedTow - 5;
                return total;     
                
                }
            };     
         
                    
    /** 
     *  Number of Problem 2;
     
     *  Description :
     *  This function describe Even Or Odd numbers ;
     *  When we provide a input  then this function check input parameaters length;
     *  if parameater length is even number then this function return "even" And parameater length
     *  number is odd then function will return "odd"; 
    */

        function evenOdd(string){
            if(typeof(string) !== 'string'){
                return 'Please give me a string'
            }
            else{
                let lengthOfString = string.length;
            
                if(lengthOfString % 2 === 0){
                    return 'even';
                }else{
                    return 'odd';
                }
            }
         };
      
        /** 
        * Number of Problem 3
        * Description:
        * This is function describe gap between input number to 7 ;
        */
        function isLGSeven (number){
            if(typeof(number) !== 'number'){
                return 'Please give me a valid of number'
            }
            else{
                let gap = number - 7

                if( gap <= 7){
                return gap;
                }   
                else{
                return number * 2;
                }
            }
        }
      
        /** 
         *  Number of Problem 4;
         *  Description:
         *  This function will be count minus value in array and return in array total minus values; 
         *
         */
        function findingBadData(numbers){
               if (Array.isArray(numbers) === true){
                let badData = 0;
            for( let i = 0; i<numbers.length; i++){

                let index = numbers[i];
               
                if(index < 0){
                    badData = badData + 1;  
                    }
                }
                return badData;
            }
            
            else{
                return 'Please provide me a valid array';
            }
        
        }
     
        /**  
         * Number of Problem 5;
         
         * Description: 
         * The function is convert total number of gems to diamond after some mathematical terms &
         * conditions; 
        */
        function gemsToDiamond(firstFriendsGems ,secondFriendsGems, thirdFriendsGems ){
                
                        let firstFriend = firstFriendsGems * 21;
                        let secondFriend = secondFriendsGems * 32; 
                        let thirdFriend = thirdFriendsGems * 43;
                
                        let totalFriendGems = firstFriend + secondFriend + thirdFriend;
                        if (totalFriendGems <= 1000 * 2){
                        return totalFriendGems;
                        }   
                        else if (totalFriendGems > 2000) {
                            return  totalFriendGems - 2000;
                        }
                        else {
                            return 'please give me a valid number ';
                        }
            }
    
           

           
       