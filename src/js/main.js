var draw = function() {
    let ctx = document.getElementById('canvas').getContext('2d');

    return {
        createHandler: function(funcName, ...oneFullBlock) {
            switch (funcName) {
                case "simpleMatrix":
                    return (e,
                        a = oneFullBlock[0],
                        b = oneFullBlock[1],
                        c = oneFullBlock[2],
                        d = oneFullBlock[3]) => {
                        data.forEach(function(item, i) {
                            data.forEach(function(item, j) {
                                ctx.fillStyle = "#" + data[i][j];
                                ctx.fillRect(j * a, i * b, c, d);
                            });
                        });
                    }
                    break;
                case "hardMatrix":
                    return (e,
                        a = oneFullBlock[0],
                        b = oneFullBlock[1],
                        c = oneFullBlock[2],
                        d = oneFullBlock[3]) => {
                        dataRgba.forEach(function(item, i) {
                            dataRgba.forEach(function(item, j) {
                                ctx.fillStyle = 'rgba(' +
                                    dataRgba[i][j][0] + ',' +
                                    dataRgba[i][j][1] + ',' +
                                    dataRgba[i][j][2] + ',' +
                                    dataRgba[i][j][3] + ')';
                                ctx.fillRect(j * a, i * b, c, d);
                            });
                        });
                    }
                    break;
                case "image":
                    return (e,
                        a = oneFullBlock[0],
                        b = oneFullBlock[1],
                        c = oneFullBlock[2],
                        d = oneFullBlock[3]) => {
                        var img = new Image();
                        img.onload = function() {
                            ctx.drawImage(img, a, b, c, d);
                        };
                        img.src = "../img/image.png";
                    }
                    break;
                default:
                    break;
            }
        }
    }
}();

let fourToFour = document.getElementById('fourToFour');
let thirtyToThirty = document.getElementById('thirtyToThirty');
let image = document.getElementById('image');
let startX, startY, endX, endY; // size one block

//image.onClick = draw.createHandler(…params)
image.onclick = draw.createHandler("image", startX = 0, startY = 0, endX = 512, endY = 512)
fourToFour.onclick = draw.createHandler("simpleMatrix", startX = 128, startY = 128, endX = 128, endY = 128)
thirtyToThirty.onclick = draw.createHandler("hardMatrix", startX = 16, startY = 16, endX = 16, endY = 16)