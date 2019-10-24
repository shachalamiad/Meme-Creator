'use strict';

var gCanvas;
var gCtx;
var gImg;

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderImgs();
}

function renderImgs() {
    var imgs = getImgs();
    var strHTMLs = imgs.map(function (image, idx) {
        return `
        <img src="${image.url}" class="img" id="${idx}"
         alt="img" name="${image.keywords}" onmousedown="onImageSelect(this)">
         `
    })
    document.querySelector('.galery').innerHTML = strHTMLs.join('');
}

function onImageSelect(e) {
   gImg = e;
   renderMeme();
}

function renderMeme() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    gCtx.drawImage(gImg, 0, 0);
    for (let txt of gMeme.txts) {
        drawTxt(txt.line, txt.y, txt.size, txt.color)
    }
    drawTxtBorder(10, gMeme.txts[gMeme.selectedTxtIdx].y)
}


function drawTxtBorder(startX, startY) {
    gCtx.strokeStyle = 'yellow';
    gCtx.strokeRect(startX - 2, startY + 2, 300 + 2, -30 - 2);
}

function drawTxt(txt, y, size, color) {
    gCtx.font = `${size}px Impact`;
    gCtx.fillStyle = `${color}`;
    gCtx.strokeStyle = 'black';
    gCtx.fillText(txt, 10, y);
    gCtx.strokeText(txt, 10, y);
}



function onAddTxt() {
    var selectedTxt = document.querySelector(".input-text").value;
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

function onIncreaseTxtSize() {
    gMeme.txts[gMeme.selectedTxtIdx].size += 5;
    renderMeme();
}

function onDecreaseTxtSize() {
    if (gMeme.txts[gMeme.selectedTxtIdx].size < 15) {
        gMeme.txts[gMeme.selectedTxtIdx].size = 14;
        return
    };
    gMeme.txts[gMeme.selectedTxtIdx].size -= 5;
    renderMeme();
}

