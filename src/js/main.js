let fourToFour = document.getElementById('fourToFour');
let thirtyToThirty = document.getElementById('thirtyToThirty');
let image = document.getElementById('image');

fourToFour.onclick = function() {
    draw(1)
};
thirtyToThirty.onclick = function() {
    draw(2)
};
image.onclick = function() {
    draw(3)
};

function draw(stage) {
    var ctx = document.getElementById('canvas').getContext('2d');
    if (stage == 1) {
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data.length; j++) {
                ctx.fillStyle = "#" + data[i][j];
                ctx.fillRect(j * 128, i * 128, 128, 128);
            }
        }
    }
    if (stage == 2) {
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
    if (stage == 3) {
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0, 512, 512);
        };
        img.src = "../img/image.png";
    }
}