'use strict'

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [{ id: 1, url: `src="imgs/8.jpg"`, keywords: ['happy'] }];
var gMeme = {
    selectedImgId: 5,
    selectedTxtIdx: 0,
    txts: [
        {
            line: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

getImage()
function getImage() {
console.log(gImgs[0].url)
    return gImgs[0].url; 
}
