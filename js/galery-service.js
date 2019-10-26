'use strict'

const User_DATA_KEY_IMGS = 'Images';
var gImgs = [
    { id: 1, url: 'imgs/pict/004.jpg', keywords: ['cute'] },
    { id: 2, url: 'imgs/pict/8.jpg', keywords: ['happy'] },
    { id: 3, url: 'imgs/pict/leo.jpg', keywords: ['cool'] },
    { id: 4, url: 'imgs/pict/img11.jpg', keywords: ['funny'] },
    { id: 5, url: 'imgs/pict/Oprah.jpg', keywords: ['funny'] },
    { id: 6, url: 'imgs/pict/2.jpg', keywords: ['beutiful'] }
];

saveImgsToStorage()

function saveImgsToStorage() {
    saveToStorage(User_DATA_KEY_IMGS, gImgs)
}


