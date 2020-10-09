const item = document.querySelectorAll('.Hayama-slide-item');
const listelength = item.length;
// console.log(listelength)
// var min = Math.min(...listelength);
var max = listelength + 1;

var min = listelength - listelength - 1;
// console.log(min);
// console.log(max);
var flg = listelength; //3

function nextclick() {
    var layer = --flg;
    // console.log(layer);
    if (layer <= min) {
        return
    } else if (layer <= flg) {
        console.log(flg);
        console.log(layer);
        if (item[layer].classList.contains('right-move') == false) {
            item[layer].classList.add('right-move');
            item[layer].style.zIndex = -layer;
            // console.log([layer + 1]);
        };
    };
};

function backclick() {
    var layer = flg++;
    // console.log(layer);
    if (layer >= max) {
        return
    } else if (layer <= flg) {
        console.log(flg);
        console.log(layer);
        if (item[layer].classList.contains('right-move') == true) {
            item[layer].classList.remove('right-move');
            item[layer].style.zIndex = layer;
            // console.log(layer);
        };
    };
};