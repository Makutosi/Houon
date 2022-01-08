// JS14_arvauspeli/ 8.1.2022

// 定数ボタン準備、そこへhtmlのarvaus-idを代入
/*ボタンにクリックイベントを設定
クリックをしたら配列の中から、ランダムに一つデータを抜き出して、arvausに返す
arvausが入っているボタンにEventListenerを指定する
crickしたときのイベントを指定*/

// 関数functionの中に、クリックしたら起こる処理を書く
// resultという配列準備、配列の中からデータを抜く
// ボタンを書き換える　btn.textContent
'use strict';
const btn = document.getElementById('arvaus');
btn.addEventListener('click', function()
{
  const result = ['大吉','中吉','小吉','吉','凶','大凶'];
  //const number = Math.floor(Math.random() * result.length);
  btn.textContent = result[Math.floor(Math.random() * result.length)];
});

//Math.random() * result.length
// 0 - 0.99999999自動で選ばれる
// result.length -> 配列resultの中のデータの個数を表す-->　* 6
// 結果　0 - 5.999999999

//Math.floor
//小数点を全て切り捨てる
//結果 0 - 5 (0,1,2,3,4,5)
