'use strict'

const User_DATA_KEY = 'userMeme';
var gNextId = 1;
var gCurrMeme;
var gKeywords = { 'happy': 12, 'funny puk': 1 }

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

function createImage () {

}


function createMemes() {
    var memes = loadMemesFromStorage();
    if (!memes || memes.length === 0) {
        meme = [createMeme(selectedImgId, selectedTxtIdx, line, size, align, color)];
    }
    gMemes = memes;
    saveMemesToStorage();
}

function createMeme(selectedImgId, line, size, align, color) {
    var userMeme = {
        id: gNextId++,
        selectedImgId: selectedImgId,
        selectedTxtIdx: 1,
        txts: [
            {
                line: line,
                size: size,
                align: align,
                color: color
            }
        ]

    }
    gMeme = userMeme;
    // saveMemesToStorage(gMemes);
    return userMeme;
}

// selectedImgId: 5,
//  selectedTxtIdx: 0,
//  txts: [
//  {
//  line: 'I never eat Falafel',
//  size: 20,
//  align: 'left',
//  color: 'red'
//  }



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