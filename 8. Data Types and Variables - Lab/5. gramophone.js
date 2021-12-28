function gramophone(band, album, song) {
    let rotate = Math.ceil(((album.length * band.length) * song.length / 2) / 2.5);
    console.log(`The plate was rotated ${rotate} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');