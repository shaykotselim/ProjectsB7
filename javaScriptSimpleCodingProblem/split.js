const lyrics = 'tmi bondu kala paKHi. ami jeno ki. bosonto kale tomay bolte pari ni';

let splitLyrics = lyrics.split('');
let splitLyrics2 = lyrics.split(' ');
let splitLyrics3 = lyrics.split('.');
// console.log(splitLyrics);
// console.log(splitLyrics2);
// console.log(splitLyrics3);

let sliceLyrics = lyrics.slice(3, 7);
console.log(sliceLyrics);
let sliceArrLyrics = lyrics.substring(3, 7);
console.log(sliceArrLyrics)

const lines =['tmi bondu kala paKHi',
                ' ami jeno ki',
                ' bosonto kale tomay bolte pari ni'
            
            ]
            const concatLines = lines.join(':')
            console.log(concatLines)