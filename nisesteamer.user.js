// ==UserScript==
// @name        NiseSteamer
// @namespace   http://prosteamer.jp/
// @description Add URL parameter on Steam store.
// @include     http://store.steampowered.com/*
// ==/UserScript
//
// Auther: eggXILE (http://twitter.com/eggxile/)
// Version: 0.0.1
// Source: http://github.com/eggxile/NiseSteamer.git
//
// Released under GPL:
// http://www.gnu.org/licenses/gpl.html
//

(function(){
  window.addEventListener("load", function(e){
    var body = document.getElementsByTagName("body")[0];

    var div = document.createElement("div");
    div.style.position = 'fixed';
    div.style.top = '4px';
    div.style.left = '4px';
    div.style.padding = '4px';
    div.style.zIndex = '100';
    div.style.width = '36px';
    div.style.height = '30px';
    div.style.backgroundColor = '#1e1e1e';
    div.style.opacity = '0.8';
    div.style.border = '1px solid #4d4b49';

    var ccUs = document.createElement('a');
    var ccJp = document.createElement('a');
    var br = document.createElement('br');
    var baseUrl = document.URL.match(/^.+\//);
    ccUs.innerHTML = 'cc=us';
    ccJp.innerHTML = 'cc=jp';
    ccJp.href = baseUrl + '?cc=jp';
    ccUs.href = baseUrl + '?cc=us';

    div.appendChild(ccUs);
    div.appendChild(br);
    div.appendChild(ccJp);
    body.appendChild(div);
  }, false);
})();
