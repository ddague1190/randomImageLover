// Following this tutorial https://medium.com/front-end-weekly/how-to-fill-your-website-with-lovely-valentines-hearts-d30fe66d58eb

"use strict";
// Backing
import {imgContainer} from './script.js'
const brd = document.createElement('div');
document.body.insertBefore(brd, imgContainer);

//Other variables
const duration = 3000;
const speed = 0.5;
const cursorXOffset = 0;
const cursorYOffset = -5;
let hearts = [];
// One heart

function generateHeart(x, y, xBound, xStart, scale) {

    let heart = document.createElement('div');
    heart.setAttribute('class', 'heart');
    brd.appendChild(heart);
    heart.time = duration;
    heart.x = x;
    heart.y = y;
    heart.bound = xBound;
    heart.direction = xStart;
    heart.style.left = heart.x + 'px';
    heart.style.top = heart.y + 'px';
    heart.scale = scale;
    heart.style.transform = "scale(" + scale + "," + scale + ")";
    // if(hearts == null) hearts=[];
    hearts.push(heart);
    return heart;
}


let before = Date.now();
let id = setInterval(frame, 5);

function frame() {
    let current = Date.now();
    let deltaTime = current - before;
    before = current;

    hearts.forEach((heart, i) => {
        heart.time -= deltaTime;
        if(heart.time > 0) {
            heart.y -= speed;
            heart.style.top = heart.y + 'px';
            heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) + 'px';
        }
        else {
            heart.remove();
            // hearts.splice(i,1);
        }
    })
};

let down = false;
let event = null;
document.onmousedown = (e) => {
    down = true;
    event = e;
}

document.onmouseenter = (e) => {
    down = true;
    event = e;
}

document.onmouseleave = (e) => down = false;
document.onmouseup = (e) => down = false;

document.onmousemove = (e) => event = e;

document.ontouchstart = (e) => {
    down = true;
    event = e.touches[0];
}

document.ontouchend = (e) => down = false;

let gr = setInterval(check, 100);

function check() {
    if(down) {
        let start = 1 - Math.round(Math.random()) * 2;
        let scale = Math.random() * Math.random() * 0.8 + 0.2;
        let bound = 30 + Math.random() * 20;
        generateHeart(event.pageX - brd.offsetLeft + cursorXOffset, event.pageY - brd.offsetTop + cursorYOffset, bound, start, scale);
    }
}

// Data collection to record and reproduce a  stream of hearts - on page load
const data = 
[
    [214, 38, 34.48081686840585, 1, 0.38051638065603144], 
    [214, 99, 46.85509250630169, -1, 0.3600200685153639], 
    [214, 99, 34.92984124306106, 1, 0.23486666053367117], 
    [208, 118, 34.103275226760104, 1, 0.6761572998783845], 
    [203, 185, 42.630736966104436, -1, 0.21533854618283216], 
    [216, 198, 32.686213715551055, 1, 0.49012640425889853], 
    [323, 243, 42.329685746627064, -1, 0.403123241713889], 
    [346, 252, 46.895241015425725, -1, 0.6139769836281246], 
    [346, 252, 45.83737282997177, 1, 0.2671409560604789], 
    [346, 252, 48.45996879088904, -1, 0.40259776931342295], 
    [376, 250, 47.04223394485822, -1, 0.2650921835116012], 
    [390, 251, 41.14814407325301, -1, 0.22015201423108935], 
    [418, 244, 37.34554916917196, -1, 0.23486013383425508], 
    [473, 250, 32.16437449351892, 1, 0.26066679663934533], 
    [475, 251, 30.05476836074461, -1, 0.30108269718097147], 
    [475, 251, 48.50600199504069, -1, 0.31191400987819007], 
    [538, 260, 32.482623117049606, -1, 0.2725092553540776], 
    [617, 292, 41.0338506833058, -1, 0.34424230585703586], 
    [628, 291, 40.269480035386344, 1, 0.28314669382167584], 
    [644, 273, 35.850462895497486, -1, 0.22614572331606134], 
    [658, 253, 43.16490313022219, 1, 0.210847169837804], 
    [656, 237, 46.04382229358134, 1, 0.20285527719357763], 
    [637, 220, 31.569078827362503, 1, 0.5343009487926185], 
    [584, 199, 44.08776662501698, -1, 0.7334276223470659], 
    [511, 177, 43.0848541539917, -1, 0.5035542333039706], 
    [448, 162, 46.02741356622387, 1, 0.2189828158127377], 
    [407, 161, 34.015235083081194, 1, 0.27344236816278245], 
    [308, 187, 39.59606189245848, 1, 0.20498719636216023], 
    [265, 231, 35.51103575871107, 1, 0.45720783091171274], 
    [260, 251, 46.78974734749492, -1, 0.4381907047863697], 
    [260, 251, 43.44147739649865, -1, 0.41771912898844765], 
    [260, 251, 49.17183788821443, 1, 0.5729126245157861], 
    [255, 267, 38.79267221546087, 1, 0.23607261345664063], 
    [239, 298, 46.27242485933007, 1, 0.6112209112679019], 
    [232, 310, 43.1297894931055, -1, 0.6199548274726314], 
    [226, 310, 35.054093554395116, 1, 0.5029892792093442], 
    [223, 299, 36.08642705588731, 1, 0.21672217434373697], 
    [208, 285, 31.773694584150043, -1, 0.6580396800592069], 
    [200, 280, 37.50060154723935, -1, 0.20630520069851827], 
    [179, 263, 38.06028973038957, 1, 0.2916385678622169], 
    [171, 234, 30.778758936762255, -1, 0.4689012876727627], 
    [171, 205, 32.66907228740135, 1, 0.8612424515380999], 
    [171, 202, 39.94073881344606, 1, 0.2480400410227526], 
    [167, 189, 32.455046507204884, 1, 0.20579884953896385], 
    [149, 160, 31.909157665097375, 1, 0.3577945547595347], 
    [140, 145, 32.35044698959665, 1, 0.22745338514028351], 
    [117, 200, 48.268308273175506, 1, 0.8121407508684666]
];

const wait = function (seconds) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
    });
  };

let promise = Promise.resolve();
data.forEach((heart) => {
        promise = promise.then(function () {
            generateHeart(...heart);
            return new Promise(function (resolve) {
                setTimeout(resolve, 150);
              });
        })
    })