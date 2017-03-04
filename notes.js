


                  //[] match any of the characters within the set
                  //[A-G] shortcut
                  //no modifier means match exactly
                  //() capture everything inside the round brackets as a group
                  //referred to as group or captures
                             //second match is for b or #, ? means 0 or 1 only (optional); applies to what is right before it
                                    //?: make a group but don't capture the * which we need to match but not print; ignore this group when we print
                                    // /i makes it case insensitive

const noteRegex = /([ABCDEFG][b#]?)(?:\*([0-9]))?/i ;

let parseNote = function(note){
      //ignore the first, match pitch and beats and set it to 1
 const [ ,pitch,beats = 1] = noteRegex.exec(note); //exec returns [ 'A#*2', 'A#', '2', index: 0, input: 'A#*2' ]
 return {pitch, beats}
};
// when the key is the same as a local variable in an object; this is an object literal
//   {pitch, beats} //shortcut
//
//   {pitch: pitch,
//    beats: beats}


let parseSong = function(song){
                            //passes the function without () as an object reference
 return song.split(/ +/).map(parseNote)
}

// can be written as for loop     for... of

// let parseSongIterative = function(song) {
//   let results = [];
//   for const rawNote of song.split(/ +/) {
//     results.push(parseNote(rawNote));
//   }
//   return results;
// }

const song = window.prompt('enter notes')
console.log(parseSong(song));

let parseNplay = function(song){
 playSong(parseSong(song), 120)
}

parseNplay(song)



// regexr.com
// regular expression = regEx - expression that can be used to match patterns in strings
//
// * + ?
// * = 0 or more
// + = 1 or more
// ? = 0 or 1
//
// destructuring - send the items that match to another set
// - take the items you see on the right side and match it to the left of the = sign
// - when destructuring, you can use = to set a default values
// - undefined will trigger a default value
//
// exec returns matched things in the array
//
// when the key is the same as a value in an object; this is an object literal
//   {pitch, beats} //shortcut
//
//   {pitch: pitch,
//    beats: beats}
//
//
// {} []
// const constant
//
// array iterator map
// map - array function : given a stream of data here is how we assign values to another stream
//
// bind - have main function need to tack on more parameters
