function playlist(input) {
    class Song {
        constructor(playlist, name, time) {
            this.playlist = playlist;
            this.name = name;
            this.time = time;
            this.print = () => console.log(this.name);
        }
    }

    let numberOfSongs = input.shift();
    let desiredSongs = input.pop();
    let songs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let curr = input[i];
        let currArr = curr.split("_");
        let currSong = new Song(currArr[0], currArr[1], currArr[2]);
        songs.push(currSong);
    }
    if (desiredSongs === "all") {
        songs.forEach(s => s.print());
    } else {
        let filttredSongs = songs.filter(s => s.playlist === desiredSongs);
        filttredSongs.forEach(s => s.print());
    }
}
playlist([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    );