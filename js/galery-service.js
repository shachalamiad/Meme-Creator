'use strict'

const User_DATA_KEY_IMGS = 'Images';
var gImgs = [{id: 1, url: 'imgs/004.jpg', keywords: ['cute']},
{id: 2, url: 'imgs/8.jpg', keywords: ['happy']},
{id: 3, url: 'imgs/img11.jpg', keywords: ['funny']}
];

saveImgsToStorage()

function saveImgsToStorage() {
    saveToStorage(User_DATA_KEY_IMGS, gImgs)
}


