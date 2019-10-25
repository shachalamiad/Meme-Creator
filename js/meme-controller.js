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
         alt="img" name="${image.keywords}" onmousedown="onImageSelect(this)">
         `
    })
    document.querySelector('.galery').innerHTML = strHTMLs.join('');
}

function onImageSelect(e) {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    gImg = e;
    document.querySelector('.meme-editor').style.display = 'flex';
    
    if (gMeme.selectedTxtIdx >= 1) {
        gMeme.txts.splice(gMeme.selectedTxtIdx, gMeme.selectedTxtIdx - 1);
    }
    renderInput();
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
        console.log('hi')
        document.querySelector(".input-text").value = gMeme.txts[gMeme.selectedTxtIdx].line;
        document.querySelector('.update-txt-btn').style.display = 'flex';
        document.querySelector('.add-btn').style.display = 'none';

    }

}

function onUpdateTxt() {
    var elUpdatedTxt = document.querySelector(".input-text").value
    gMeme.txts[gMeme.selectedTxtIdx].line = elUpdatedTxt;
    renderMeme();
    document.querySelector('.update-txt-btn').style.display = 'none';
    document.querySelector('.add-btn').style.display = 'flex';
    document.querySelector(".input-text").value = '';
}

function drawTxtBorder(startX, startY) {
    gCtx.strokeStyle = 'yellow';
    gCtx.strokeRect(startX - gBoxMargin, startY + gBoxMargin, gBoxWidth - gBoxMargin, -gBoxHeight + gBoxMargin);
}

function drawTxt(txt, y, size, color) {
    gCtx.font = `${size}px Impact`;
    gCtx.fillStyle = `${color}`;
    gCtx.strokeStyle = 'black';
    gCtx.fillText(txt, 10, y);
    gCtx.strokeText(txt, 10, y);
}

function onInput() {
    var selectedTxt = document.querySelector(".input-text").value;
    gMeme.txts[gMeme.selectedTxtIdx].line = selectedTxt;
    renderMeme();
}

function onAddLine() {
   
    addLine('new line');
    renderInput();
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
    renderInput();
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

function renderInput () {
    document.getElementById('text').value = gMeme.txts[gMeme.selectedTxtIdx].line
}



function onSetLang(lang) {
    setLang(lang);
    doTrans();
    if (lang = 'he') {
        // renderInputAtr()
    }
}

// TBD translate input Lorem
// function renderInputAtr() {

//     var elInput = document.querySelector('.input-text');
//     var newInput = document.createElement('.lorem');
//     newInput.innerHTML=`<input type="text" class="input-text" id="text" class="text" name="text"
//     onfocus="this.value=''" placeholder="לורם איפסום דולור" />`
//     elInput.parentNode.replaceChild(newInput, elInput);
// }



//To be implemented
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

