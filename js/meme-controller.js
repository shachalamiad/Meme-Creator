'use strict';

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderMeme()
}

function renderMeme() {
    var elselectedImg = document.querySelector('.canvas-image');
    var selectedImgId = elselectedImg;
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    gCtx.drawImage(selectedImgId, 0, 0);
    for (let txt of gMeme.txts) {
        drawTxt(txt.line, txt.y, txt.size, txt.color)
    }

    drawTxtBorder(10, gMeme.txts[gMeme.selectedTxtIdx].y)
}


function drawTxtBorder(startX, startY) {
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



function onAddTxt() {
    var selectedTxt = document.querySelector(".text").value;
    var newTxt = {
        line: selectedTxt,
        y: gCanvas.height / 2,
        size: 24,
        align: 'left',
        color: 'white'
    };
    gMeme.txts.push(newTxt);
    gMeme.selectedTxtIdx = gMeme.txts.length - 1
    renderMeme()
}

function onDeleteTxt() {
    if (gMeme.txts.length === 1) {
        return
    };
    gMeme.txts.splice(gMeme.selectedTxtIdx, 1);
    if (gMeme.selectedTxtIdx >= gMeme.txts.length) {
        gMeme.selectedTxtIdx = gMeme.txts.length - 1
    }
    renderMeme();
}

function onSwitchTxt() {
    gMeme.selectedTxtIdx = (gMeme.selectedTxtIdx + 1) % gMeme.txts.length
    renderMeme()
}


function onMoveUpTxt() {
    gMeme.txts[gMeme.selectedTxtIdx].y -= 10;
    renderMeme();
}

function onMoveDownTxt() {
    gMeme.txts[gMeme.selectedTxtIdx].y += 10;
    renderMeme();
}