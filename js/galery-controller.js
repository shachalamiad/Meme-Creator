'use strict'
var gCurrImage;

// function initGalery(){
//     renderGalery();
// }

function onImageSelect(e) {
    console.log(e)
    var elImgName = e.name;
    var imgName = elImgName;
    // var currImage = e;
    // gCurrImage = currImage;
    // getImage(e);
    renderMeme(e);
    // window.location = "./main.html"
}


