function leapYear (year){

    const remainder = year % 4;

    if( remainder === 0){
        console.log(year , 'This year is leap year');
    }else{
        console.log(year, 'This year is not leap year');
    }
}

leapYear(3239);
leapYear(2022);
leapYear(2016);