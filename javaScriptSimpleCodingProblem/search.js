const lyrics = 'tmi bondu kala paKHi ami jeno ki bosonto kale tomay bolte pari ni';

let lyricsLower = lyrics.toLowerCase()
let seacrchString = 'Pakhi';

let seacrchStringLower = seacrchString.toLowerCase()

let searcyLyrics = lyricsLower.includes(seacrchStringLower);
console.log(searcyLyrics);


if( lyrics.indexOf('ammi') !== -1 ){
    console.log('exist inside the string');
}else{
    console.log('can not find it');
}

// starts with 
console.log(lyrics.startsWith('2mi'));
// ends with
console.log(lyrics.endsWith('ni'));
