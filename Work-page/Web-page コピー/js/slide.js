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

// このslide.jsフォルダには一個目のブルックリンスタイルについてのスライドが書かれていますが、
// slide2で使われている葉山スライドと行っている処理は同じなので、配列を用いてfor文を使用し一つのフォルダに
// まとめ、より簡略化した処理を書こうと調整しようとしていますが、現在はまだ動作していないため動作している
// フォルダを入れています。