'use strict'

const User_DATA_KEY = 'userMeme';
var gNextId = 1;
var gKeywords = { 'happy': 12, 'funny puk': 1 }


var gMeme = {
    selectedImgId: 5,
    selectedTxtIdx: 0,
    txts: [
        {
            line: null,
            y: -130,
            size: 0,
            align: 'left',
            color: 'red'
        }
    ]
}

function addLine(selectedTxt) {
    if (gMeme.selectedTxtIdx !== 3) {
    var newTxt = {
        line: selectedTxt,
        y: gMeme.txts[gMeme.selectedTxtIdx].y + 170,
        size: 24,
        align: 'left',
        color: 'white'
    };
    gMeme.txts.push(newTxt);
    gMeme.selectedTxtIdx = gMeme.txts.length - 1;
    return newTxt;
}
    if (gMeme.selectedTxtIdx === 3) {
        return
    }
}


function clearLines(){
    console.log('hi');
    console.log(gMeme.txts);
    if (gMeme.txts.length !== 0) {
        gMeme.SelectedTxtIdx = 0;
    }
    console.log('hi');
    console.log(gMeme.txts);
}


function getUserMemes() {
    var userMemes = loadMemesFromStorage();
    if (!userMemes) return;
    return userMemes;
}

function saveMemesToStorage() {
    saveToStorage(User_DATA_KEY, gMemes)
}

function loadMemesFromStorage() {
    return loadFromStorage(User_DATA_KEY);
}


function getImgs() {
    var imgs = loadImgsFromStorage();
    return imgs;
}


function loadImgsFromStorage() {
    return loadFromStorage(User_DATA_KEY_IMGS);
}