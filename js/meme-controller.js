'use strict'
console.log('CANVAS!')

var gCanvas;
var gCtx;
var gTxtWidth = 40;
var gSelectedTxt;

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderMeme()
}

function onSubmitForm() {
    event.preventDefault();
    var elSelectedTxt = document.querySelector(".text").value;
    var selectedTxt = elSelectedTxt;
    gSelectedTxt = selectedTxt;
    drawTxt(gSelectedTxt);
}

function renderMeme() {
    // console.log(e)
    var elselectedImg = document.querySelector('.canvas-image');
    var selectedImgId = elselectedImg;
    console.log(elselectedImg)
    gCtx.drawImage(selectedImgId, 0, 0);
    // drawTxt(gSelectedTxt);
    createMeme(selectedImgId, gSelectedTxt);
}

function drawTxt(txt) {
    gCtx.font = "30px Impact";
    gCtx.fillText(txt, 10, 50);
}