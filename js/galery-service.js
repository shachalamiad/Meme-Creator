'use strict'

const User_DATA_KEY_IMGS = 'Images';
var gImgs = [
    { id: 1, url: 'imgs/004.jpg', keywords: ['cute'] },
    { id: 2, url: 'imgs/8.jpg', keywords: ['happy'] },
    { id: 3, url: 'imgs/leo.jpg', keywords: ['cool'] },
    { id: 4, url: 'imgs/img11.jpg', keywords: ['funny'] },
    { id: 5, url: 'imgs/Oprah.jpg', keywords: ['funny'] },
    { id: 6, url: 'imgs/2.jpg', keywords: ['beutiful'] }
];

saveImgsToStorage()

function saveImgsToStorage() {
    saveToStorage(User_DATA_KEY_IMGS, gImgs)
}


