function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    // 1 матрица
    // for (var i = 0; i < data.length; i++) {
    //     for (var j = 0; j < data.length; j++) {
    //         console.log(data[i][j])
    //         ctx.fillStyle = "#" + data[i][j];
    //         ctx.fillRect(j * 128, i * 128, 128, 128);
    //     }
    // }
    // 2 матрица
    for (var i = 0; i < dataRgba.length; i++) {
        for (var j = 0; j < dataRgba.length; j++) {
            ctx.fillStyle = 'rgba(' +
                dataRgba[i][j][0] + ',' +
                dataRgba[i][j][1] + ',' +
                dataRgba[i][j][2] + ',' +
                dataRgba[i][j][3] + ')';
            ctx.fillRect(j * 16, i * 16, 16, 16);
        }
    }
}

draw()