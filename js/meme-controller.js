'use strict'
console.log('CANVAS!')

var gCanvas;
var gCtx;
var gTxtWidth = 40;

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
}

function onSubmitForm() {
    event.preventDefault();
    var elSelectedTxt = document.querySelector(".name").value;
    var selectedTxt = elSelectedTxt;
    renderMeme(selectedTxt);
}

function renderMeme(selectedTxt) {
var elselectedImg = document.querySelector('img');
var selectedImgId = elselectedImg;
gCtx.drawImage(selectedImgId, 0, 0);
drawTxt(selectedTxt);
createMeme(selectedImgId, selectedTxt);
}

function drawTxt(txt) {
    gCtx.font = "30px Impact";
    gCtx.fillText(txt, 10, 50);
}