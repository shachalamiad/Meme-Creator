'use strict'
const User_IMGS_KEY = 'Images';
const User_IMG_KEY = 'Image';
var gImg;


function onLoadGallery() {
    renderImgs();
}

var gImgs = [
    { id: 0, url: 'imgs/pict/X-Everywhere.jpg', keywords: 'beutiful' },
    { id: 1, url: 'imgs/pict/004.jpg', keywords: 'cute' },
    { id: 2, url: 'imgs/pict/8.jpg', keywords: 'happy' },
    { id: 3, url: 'imgs/pict/leo.jpg', keywords: 'cool' },
    { id: 4, url: 'imgs/pict/img11.jpg', keywords: 'funny' },
    { id: 5, url: 'imgs/pict/Oprah.jpg', keywords: 'funny' },
    { id: 6, url: 'imgs/pict/2.jpg', keywords: 'beutiful' },
    { id: 7, url: 'imgs/pict/005.jpg', keywords: 'cool' },
    { id: 8, url: 'imgs/pict/5.jpg', keywords: 'funny' },
    { id: 9, url: 'imgs/pict/006.jpg', keywords: 'beutiful' },
    { id: 10, url: 'imgs/pict/9.jpg', keywords: 'cool' },
    { id: 11, url: 'imgs/pict/12.jpg', keywords: 'beutiful' },
    { id: 12, url: 'imgs/pict/19.jpg', keywords: 'funny' },
    { id: 13, url: 'imgs/pict/Ancient-Aliens.jpg', keywords: 'beutiful' },
    { id: 14, url: 'imgs/pict/drevil.jpg', keywords: 'cool' },
    { id: 15, url: 'imgs/pict/img2.jpg', keywords: 'beutiful' },
    // { id: 16, url: 'imgs/pict/img4.jpg', keywords: 'beutiful' },
    { id: 17, url: 'imgs/pict/img5.jpg', keywords: 'funny' },
    { id: 18, url: 'imgs/pict/img6.jpg', keywords: 'beutiful' },
    { id: 19, url: 'imgs/pict/img12.jpg', keywords: 'beutiful' },
    { id: 20, url: 'imgs/pict/meme1.jpg', keywords: 'beutiful' },
    { id: 21, url: 'imgs/pict/One-Does-Not-Simply.jpg', keywords: 'beutiful' },
    { id: 22, url: 'imgs/pict/patrick.jpg', keywords: 'funny' },
    { id: 23, url: 'imgs/pict/putin.jpg', keywords: 'beutiful' }

];


function renderImgs() {
    var strHTMLs = gImgs.map(function (image, idx) {
        return `
        <img src="${image.url}" class="img" id="${image.id}"
         alt="img" name="${image.keywords}" onmousedown="onImageSelect(this)" >
         </li>
         `
    })
    document.querySelector('.galery').innerHTML = strHTMLs.join('');
}


function onKeyUpSearch() {
    console.log(gImgs[0].id)
    var input = document.querySelector('.input-search');
    var filter = input.value;
    for (var i = 0; i < gImgs.length; i++) {
        var txtValue = gImgs[i].keywords;
        if (txtValue.indexOf(filter) > -1) {
            document.getElementById(`${gImgs[i].id}`).style.display = "";
        } else {
            document.getElementById(`${gImgs[i].id}`).style.display = "none";
        }
    }
}


function onImageSelect(el) {
    var imgId = el.id
    var selectedImg = gImgs[imgId];
    gImg = selectedImg
    saveImgToStorage();
    window.location = 'index.html';
}

function saveImgToStorage() {
    saveToStorage(User_IMG_KEY, gImg)
}