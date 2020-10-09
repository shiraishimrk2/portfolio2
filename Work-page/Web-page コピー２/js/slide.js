const btn_back = document.querySelectorAll('btn__back');
const btn_backLength = btn_back.length;

const btn_next = document.querySelectorAll('btn__next');
const btn_nextLength = btn_next.length;


for (let index = 0; index < btn_backLength; index++) {
    btn_next[index].addEventListener('click', () => {
        if (btn_next[0]) {
            rightclick();
        } else if (btn_next[1]) {
            rightclick2();
        }
        ElementArray[index];
        // var Elementlength = ElementArray[index].length;
        // var max = Elementlength + 1;
        // var min = Elementlength - ElementLength - 1;

        // var flg = Elementlength;
        // rightclick();
    });
};
const brk_itemList = document.querySelectorAll('.Brk-slide-item');
const brk_itemArray = brk_itemList;
const brk_itemLength = brk_itemList.length;

const hayama_itemList = document.querySelectorAll('.Hayama-slide-item');
const hayama_itemArray = hayama_itemList;
const hayama_itemLength = hayama_itemList.length;

const ElementArray = [brk_itemArray, hayama_itemArray];


// console.log(itemLength);
// var min = Math.min(...itemLength);

var max = brk_itemLength + 1;
var min = brk_itemLength - brk_itemLength - 1;
// console.log(min);
// console.log(max);
var flg = brk_itemLength; //3

function rightclick() {
    var layer = --flg;
    // console.log(layer);
    if (layer <= min) {
        return
    } else if (layer <= flg) {
        console.log(flg);
        console.log(layer);
        if (brk_itemList[layer].classList.contains('right-move') == false) {
            brk_itemList[layer].classList.add('right-move');
            brk_itemList[layer].style.zIndex = -layer;
            // console.log([layer + 1]);
        };
    };
};

function leftclick() {
    var layer = flg++;
    // console.log(layer);
    if (layer >= max) {
        return
    } else if (layer <= flg) {
        console.log(flg);
        console.log(layer);
        if (brk_itemList[layer].classList.contains('right-move') == true) {
            brk_itemList[layer].classList.remove('right-move');
            brk_itemList[layer].style.zIndex = layer;
            // console.log(layer);
        };
    };
};

var max = hayama_itemLength + 1;
var min = hayama_itemLength - hayama_itemLength - 1;
// console.log(min);
// console.log(max);
var flg = hayama_itemLength; //3

function rightclick2() {
    var layer = --flg;
    // console.log(layer);
    if (layer <= min) {
        return
    } else if (layer <= flg) {
        console.log(flg);
        console.log(layer);
        if (hayama_itemList[layer].classList.contains('right-move') == false) {
            hayama_itemList[layer].classList.add('right-move');
            hayama_itemList[layer].style.zIndex = -layer;
            // console.log([layer + 1]);
        };
    };
};