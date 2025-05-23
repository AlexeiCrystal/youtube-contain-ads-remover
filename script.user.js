// ==UserScript==
// @name           YouTube "Contain Ads" bars remover
// @name:ru        Убрать плашку "Есть реклама" на YouTube
// @namespace      http://tampermonkey.net/
// @homepage       https://alexeicrystal.github.io/youtube-contain-ads-remover
// @license        MIT | https://github.com/AlexeiCrystal/youtube-contain-ads-remover/blob/main/LICENSE.md
// @supportURL     https://github.com/AlexeiCrystal/youtube-contain-ads-remover/issues
// @source         https://github.com/AlexeiCrystal/youtube-contain-ads-remover
// @version        1.1
// @description    Removes "Contain ads" bars in YouTube videos
// @description:ru Удаляет плашки "Есть реклама" в видео на YouTube
// @author         AlexeiCrystal
// @match          *://*.youtube.com/*
// @match          *://*.youtu.be/*
// @match          *://youtube.com/*
// @match          *://yt.be/*
// @match          *://music.youtube.com/*
// @grant          none
// @run-at         document-end
// @icon           https://github.com/AlexeiCrystal/youtube-contain-ads-remover/raw/main/icon.png
// @downloadURL    https://github.com/AlexeiCrystal/youtube-contain-ads-remover/raw/main/script.user.js
// @updateURL      https://github.com/AlexeiCrystal/youtube-contain-ads-remover/raw/main/script.user.js
// ==/UserScript==

(function() {
    'use strict';
    
    const selectors = [
        'ytm-paid-content-overlay-renderer',
        'ytd-paid-content-overlay-renderer',
        '.ytp-paid-content-overlay'
    ];
function removeAdOverlays() {
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                element.remove();
            });
        });
    }
    const observer = new MutationObserver(removeAdOverlays);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
 window.addEventListener('spfdone', removeAdOverlays);
window.addEventListener('yt-navigate-finish', removeAdOverlays);
    setInterval(removeAdOverlays, 1000);
    removeAdOverlays();
})();
