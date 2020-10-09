const itemList = document.querySelectorAll('.Brk-slide-item');
const itemLength = itemList.length;
// console.log(itemLength)
// var min = Math.min(...itemLength);
var max = itemLength + 1;

var min = itemLength - itemLength - 1;
// console.log(min);
// console.log(max);
var flg = itemLength; //3

function rightclick() {
    var layer = --flg;
    // console.log(layer);
    if (layer <= min) {
        return
    } else if (layer <= flg) {
        console.log(flg);
        console.log(layer);
        if (itemList[layer].classList.contains('right-move') == false) {
            itemList[layer].classList.add('right-move');
            itemList[layer].style.zIndex = -layer;
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
        if (itemList[layer].classList.contains('right-move') == true) {
            itemList[layer].classList.remove('right-move');
            itemList[layer].style.zIndex = layer;
            // console.log(layer);
        };
    };
};

// 今回は元々あったjsを簡略化し、見やすくするために修正しました。
// 元々は配列を使用しておらず、一つ一つの要素を持ってきて、その各要素に
// 直接指示を与えていたものでした。
// しかし、 修正したものの、 まだ同じ指示なのにslide2というフォルダを分けて
// ブルックリンスタイルの説明をしているスライドと葉山のスライドを分けてしまっているため、
// それを一つのフォルダにし、for文を用いて分ける方法を現在試しています。