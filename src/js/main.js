function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data.length; j++) {
            console.log(data[i][j])
            ctx.fillStyle = "#" + data[i][j];
            ctx.fillRect(j * 128, i * 128, 128, 128);
        }
    }
}

draw()