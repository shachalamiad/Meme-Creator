'use strict';

var gCanvas;
var gCtx;
var gImg;
var gBoxMargin = 2;
var gBoxWidth = 300;
var gBoxHeight = 30;

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
         alt="img" name="${image.keywords}" onmousedown="onImageSelect(this)" >
         </li>
         `
    })
    document.querySelector('.galery').innerHTML = strHTMLs.join('');
}


function onImageSelect(e) {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    gImg = e;
    document.querySelector('.meme-editor').style.display = 'flex';
    document.querySelector('.image-gallery').style.display = 'none';
    document.querySelector('footer').style.display = 'block';
    if (gMeme.selectedTxtIdx >= 1) {
        gMeme.txts.splice(gMeme.selectedTxtIdx, gMeme.selectedTxtIdx - 1);
    }
    renderMeme();
}

function renderMeme() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    gCtx.drawImage(gImg, 0, 0);
    for (let txt of gMeme.txts) {
        drawTxt(txt.line, txt.y, txt.size, txt.color, txt.align, txt.stroke)
    }
    drawTxtBorder(gMeme.txts[gMeme.selectedTxtIdx].y)
}

function onCanvasClicked(ev) {
    var clickedTxt = gMeme.txts.find(txt => {
        return (
            ev.clientX > 10 - gBoxMargin &&
            ev.clientX < gBoxWidth + 10 - gBoxMargin &&
            ev.clientY > (gMeme.selectedTxtIdx * 110 + 50) + gBoxMargin &&
            ev.clientY < (gMeme.selectedTxtIdx * 110 + 50) + gBoxHeight - gBoxMargin
        )
    })
    if (clickedTxt) {

    }
}

function drawTxtBorder(startY) {
    var margin = 25
    var width = gCtx.canvas.width - margin * 2;
    gCtx.strokeStyle = 'yellow';
    gCtx.strokeRect(margin, startY + gBoxMargin, width, -gBoxHeight + gBoxMargin);
}

function drawTxt(txt, y, size, color, align, stroke) {
    var x = gCtx.canvas.width / 2;
    gCtx.font = `${size}px Impact`;
    gCtx.fillStyle = color;
    gCtx.textAlign = align;
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = stroke;
    gCtx.strokeText(txt, x, y);
}

function onChangeAlign(align) {
    gMeme.txts[gMeme.selectedTxtIdx].align = align;
    renderMeme();
}

function onChangeStrokeColor(stroke) {
    gMeme.txts[gMeme.selectedTxtIdx].stroke = stroke;
    renderMeme();
}


function onChangeColor(color) {
    gMeme.txts[gMeme.selectedTxtIdx].color = color;
    renderMeme();
}

function onInput() {
    var elSelectedTxt = document.querySelector(".input-text").value;
    var selectedTxt = elSelectedTxt;
    updateNewLine(selectedTxt);
    renderMeme();
}

function onAddLine() {
    addLine('new line');
    gMeme.txts[gMeme.selectedTxtIdx].align = 'center';
    renderMeme();
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
    renderMeme();
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
    gBoxHeight += 5
    renderMeme();
}

function onDecreaseTxtSize() {
    if (gMeme.txts[gMeme.selectedTxtIdx].size < 15) {
        gMeme.txts[gMeme.selectedTxtIdx].size = 14;
        return
    };
    gMeme.txts[gMeme.selectedTxtIdx].size -= 5;
    gBoxHeight -= 5
    renderMeme();
}


function onSetLang(lang) {
    setLang(lang);
    doTrans();
    if (lang = 'he') {
    }
}

function onShowGallery() {
    document.querySelector('.meme-editor').style.display = 'none';
    document.querySelector('.image-gallery').style.display = 'block';
    document.querySelector('footer').style.display = 'none';
}

function onKeyUpSearch() {
    var input = document.querySelector('.input-search');
    var filter = input.value;
    var x = document.getElementById(0);
    for (var i = 0; i < gImgs.length; i++) {
        var txtValue = gImgs[i].keywords;
        if (txtValue.indexOf(filter) > -1) {
            console.log('hi')
            document.getElementById(`${i}`).style.display = "";
        } else {
            document.getElementById(`${i}`).style.display = "none";
        }
    }
}