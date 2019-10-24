'use strict'

const User_DATA_KEY = 'userMeme';
var gNextId = 1;
var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gMeme = {
    selectedImgId: 5,
    selectedTxtIdx: 0,
    txts: [
        {
            line: 'I never eat Falafel',
            y: 0,
            size: 0,
            align: 'left',
            color: 'red'
        }
    ]
}

saveMemeToStorage()

function addLine(selectedTxt, gTxtChange) {
    if (gMeme.selectedTxtIdx !== 3) {
    var newTxt = {
        line: selectedTxt,
        y: gMeme.txts[gMeme.selectedTxtIdx].y + (gMeme.selectedTxtIdx*110 + 50),
        size: 24,
        align: 'left',
        color: 'white'
    };
    gMeme.txts.push(newTxt);
    gMeme.selectedTxtIdx = gMeme.txts.length - 1;
    saveMemeToStorage();
    return newTxt;
}
    if (gMeme.selectedTxtIdx === 3) {
        return
    }
}


function clearLines(){
    if (gMeme.txts.length !== 0) {
        gMeme.SelectedTxtIdx = 0;
    }

}


function getUserMemes() {
    var userMemes = loadMemesFromStorage();
    if (!userMemes) return;
    return userMemes;
}



function getImgs() {
    var imgs = loadImgsFromStorage();
    return imgs;
}


function loadImgsFromStorage() {
    return loadFromStorage(User_DATA_KEY_IMGS);
}


function saveMemeToStorage() {
    saveToStorage(User_DATA_KEY, gMeme)
}

function loadMemeFromStorage() {
    return loadFromStorage(User_DATA_KEY);
}
