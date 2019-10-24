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
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
   gImg = e;
   document.querySelector('.meme-editor').style.display = 'flex';
   clearLines();
   gCtx.drawImage(gImg, 0, 0);
//    console.log(gMeme.selectedTxtIdx);
//    if (gMeme.selectedTxtIdx !== 0) {
//     gMeme.selectedTxtIdx === 0
//    }
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


function onAddLine() {
    var selectedTxt = document.querySelector(".input-text").value;
    addLine(selectedTxt);
    renderMeme();
    document.querySelector(".input-text").value = ''
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


//Download Image
function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}

// The next 2 functions handle IMAGE UPLOADING to img tag from file system: 
function onImgInput(ev) {
    loadImageFromInput(ev, renderCanvas)
}
function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader();
    
    reader.onload = function (event) {
        var img = new Image();
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result;
    }
    reader.readAsDataURL(ev.target.files[0]);
}

