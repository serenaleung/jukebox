// const noteRegex = /([ABCDEFG][b#]?)(?:\*([0-9]))?/i ;
//
// let parseNote = function(note){
//  const [ ,pitch,beats = 1] = noteRegex.exec(note); //DESTRUCTURING
//  return {pitch, beats}
// };
// let parseSong = function(song){
//  return song.split(/ +/).map(parseNote)
// }
//
// const song = window.prompt('enter notes')
// console.log(parseSong(song));
//
// let parseNplay = function(song){
//  playSong(parseSong(song), 120)
// }
//
// parseNplay(song)



// I've provided you with player.js (click here to download) which defines a function called playSong to play a song composed of an array of note objects. You can use playSong as follows:
//
// let notes = [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch:'D', beats: 4}];
// // Play the song at 400 beats per minute.
// playSong(notes, 400);
// Tasks
//
// Create a new script file called jukebox.js, where you will put all of your Javascript for this assignment.
//
// First we need to be able to parse individual notes. Write a function called parseNote, that takes a string representing a single note (e.g. "C#*2" or "A") and returns a note object (e.g. {pitch: "C#", beats: 2}). If the user doesn't provide a number of beats (e.g. "C#") then set beats to 1.
//
// // Example usage
// parseNote("C#*2"); //=> { pitch: 'C#', beats: 2}
// parseNote("D"); //=> { pitch: 'D', beats: 1}
// Now let's parse a whole song string. Write a function called parse Song that takes a song string as above, and returns an array of note objects. The parseSong function should use the parseNote function.
//
// // Example usage
// parseSong("Ab B"); // =>; [{pitch: 'Ab', beats: 1}, {pitch: 'B', beats: 1}]
// Finally, let's build our amazing Jukebox! Create an HTML page that, when loaded, prompts the user for a song string and plays the song. To keep things clean, please use two script tags in your page. One to load the provided player.js file, and one to load your own jukebox.js file.
// C#*2
let userSong = prompt("What song do you want to play?");

let parseNote = function (notes){
  let pitchBeats = {};

    if (notes.length > 2) {
      let splitNotes = notes.split("*");
      pitchBeats.pitch = splitNotes[0];
      pitchBeats.beats = parseInt(splitNotes[1]);
    }
    else {
      pitchBeats.pitch = notes;
      pitchBeats.beats = 1;
    }
    return pitchBeats;
    console.log(pitchBeats)
}

let parseSong = function (song) {
  let arrNotes = [];
  arrNoteSplit = song.split(" ");

  for (let i=0; i<arrNoteSplit.length; i++) {
    arrNotes.push(parseNote(arrNoteSplit[i]));
  }
return arrNotes;
console.log(arrNotes);
}

console.log(parseSong(userSong));

// console.log(parseSong("C#*3 D A*4 Bb"));

// playSong(parseSong(userSong), 120);

const onComplete = function () {
   console.log('Song finished playing');
}
playSong(parseSong(userSong), 120, onComplete);

// parseNplay()

// const playSong = function (, , ,) {
//   plays a song composed of array of note objects
//   let notes = [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch:'D', beats: 4}];
// }


// Example usage
// parseNote("C#*2"); //=> { pitch: 'C#', beats: 2}
// parseNote("D"); //=> { pitch: 'D', beats: 1}
//
// let temp = [];

// Example usage
// parseSong("Ab B"); // =>; [{pitch: 'Ab', beats: 1}, {pitch: 'B', beats: 1}]
