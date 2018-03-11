// ==UserScript==
// @name         YoutubePrank
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //dashboard-stat-value - suby i wyświetlenia
    //vm-video-metric-value - statystyki filmu
    //dashboard-widget-view-all-link - "Pokaż wszystkie <ilość filmów>"
    document.getElementsByClassName('dashboard-stat-value')[0].innerHTML=('59921');//łaczne wyświetlenia
    document.getElementsByClassName('dashboard-stat-value')[1].innerHTML=('9011');//suby
    document.getElementsByClassName('vm-video-metric-value')[0].innerHTML=('10238');//wyświetlenia dla filmu
    document.getElementsByClassName('vm-video-metric-value')[1].innerHTML=('5022');//komentarze dla filmu
    document.getElementsByClassName('vm-video-metric-value')[2].innerHTML=('3834');//like dla filmu
    document.getElementsByClassName('vm-video-metric-value')[3].innerHTML=('98');//dislike dla filmu
    document.getElementsByClassName('vm-video-metric-value')[4].innerHTML=('14567');//wyświetlenia dla 2 filmu
    document.getElementsByClassName('vm-video-metric-value')[5].innerHTML=('6353');//komentarze dla 2 filmu
    document.getElementsByClassName('vm-video-metric-value')[6].innerHTML=('3764');//like dla 2 filmu
    document.getElementsByClassName('vm-video-metric-value')[7].innerHTML=('73');//dislike dla 2 filmu
    document.getElementsByClassName('vm-video-metric-value')[8].innerHTML=('24635');//wyświetlenia dla 3 filmu
    document.getElementsByClassName('vm-video-metric-value')[9].innerHTML=('9657');//komentarze dla 3 filmu
    document.getElementsByClassName('vm-video-metric-value')[10].innerHTML=('5363');//like dla 3 filmu
    document.getElementsByClassName('vm-video-metric-value')[11].innerHTML=('193');//dislike dla 3 filmu
    document.getElementsByClassName('vm-video-metric-value')[12].innerHTML=('10472');//wyświetlenia dla 4 filmu
    document.getElementsByClassName('vm-video-metric-value')[13].innerHTML=('6392');//komentarze dla 4 filmu
    document.getElementsByClassName('vm-video-metric-value')[14].innerHTML=('3208');//like dla 4 filmu
    document.getElementsByClassName('vm-video-metric-value')[15].innerHTML=('11');//dislike dla 4 filmu
    document.getElementsByClassName('dashboard-widget-view-all-link')[0].innerHTML=('Pokaż wszystkie (4)');//Ilość filmów
})();
