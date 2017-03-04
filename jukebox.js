// let userSong = prompt("What song do you want to play?");

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

// console.log(parseSong(userSong));
// console.log(parseSong("C#*3 D A*4 Bb"));

// playSong(parseSong(userSong), 120);

const onComplete = function () {
   let userSong = prompt("What song do you want to play?");
   let songNotes = parseSong(userSong);
   console.log('Song finished playing');
   playSong(songNotes, 120, onComplete);
}

onComplete();
