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
    var elselectedImg = document.querySelector('.canvas-image');
    var selectedImgId = elselectedImg;
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    gCtx.drawImage(selectedImgId, 0, 0);

    // createMeme(selectedImgId, gSelectedTxt);

    for (let txt of gMeme.txts) {
        drawTxt(txt.line, txt.y, txt.size, txt.color)
    }

    drawRect(10, gMeme.txts[gMeme.selectedTxtIdx].y)
}


function onDeleteLine() {
    gMeme.txts.splice(1, 1);

    renderMeme();
}

function onMoveRect(startX, startY) {
    gMeme.selectedTxtIdx = (gMeme.selectedTxtIdx + 1) % gMeme.txts.length
    renderMeme()
}

function drawRect(startX, startY) {
    gCtx.strokeStyle = 'yellow'
    gCtx.strokeRect(startX - 2, startY + 2, 300 + 2, -30 - 2)
}

function drawTxt(txt, y, size, color) {
    gCtx.font = `${size}px Impact`;
    gCtx.fillStyle = `${color}`;
    gCtx.strokeStyle = 'black';
    gCtx.fillText(txt, 10, y);
    gCtx.strokeText(txt, 10, y);
}


function onMoveUpTxt() {
    gMeme.txts[gMeme.selectedTxtIdx].y -= 10;
    renderMeme();
}

function onMoveDownTxt() {
    gMeme.txts[gMeme.selectedTxtIdx].y += 10;
    
    renderMeme();
}