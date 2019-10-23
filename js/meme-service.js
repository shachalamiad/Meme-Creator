'use strict'

const User_DATA_KEY = 'userMeme';
var gNextId = 1;
var gCurrMeme;
var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [{id: 1, url: 'img/popo.jpg', keywords: ['happy']}];
var gMemes;

var gMeme = {
    selectedImgId: 5,
    selectedTxtIdx: 0,
    txts:
    {
        line: 'I never eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }

}


function createMemes() {
    var memes = loadMemesFromStorage();
    if (!memes || memes.length === 0) {
        meme = [createMeme(selectedImgId, selectedTxtIdx, line, size, align, color)];
    }
    gMemes = memes;
    saveMemesToStorage();
}



function createMeme(selectedImgId, selectedTxtIdx, line, size, align, color) {
    var userMeme = {
        id: gNextId++,
        selectedImgId: selectedImgId,
        selectedTxtIdx: selectedTxtIdx,
        txts: [
            {
                line: line,
                size: size,
                align: align,
                color: color
            }
        ]

    }
    // gMemes = userMeme;
    saveMemesToStorage(gMemes);
    return userMeme;
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