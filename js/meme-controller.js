'use strict'
console.log('CANVAS!')

var gCanvas;
var gCtx;
var gTxtWidth = 40;

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderImage();
    drawTxt();
}

function renderImage() {
// var img = getImage();
var img = document.querySelector('img');
console.log(img)
gCtx.drawImage(img, 0, 0);
}

function drawTxt() {
    gCtx.font = "30px Impact";
    gCtx.fillText("Hello World", 10, 50);
}