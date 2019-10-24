'use strict'

var gCurrLang = 'en';

var gTrans = {
    gallery_trns: {
        en: 'Gallery',
        he: 'גלריה'
    },
    mem: {
        en: 'Memes',
        he: 'ממים'
    },
    about: {
        en: 'About',
        he: 'אודות'
    },
    add: {
        en: 'Add',
        he: 'הוסף'
    }
    // select_img: {
    //     en: 'Please select an image',
    //     he: 'אנא בחר תמונה'
    // }
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]');
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        var transKey = el.dataset.trans;
        var txt = getTrans(transKey);
        el.innerText = txt;
    }
}

function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';

    var txt = keyTrans[gCurrLang];
    if (!txt) txt = keyTrans['en'];

    return txt;
}

function setLang(lang) {
    gCurrLang = lang;
}