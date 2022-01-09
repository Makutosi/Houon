// JS12_while & while do/ 9.1.2022
// while文、条件が成立したら、処理を繰り返す

// let 変数準備、今１０００円持っている
// let price = 1000;

// お金が残っているうちは、この処理を続ける
// while (price > 0) {}

// 買えなくなったら処理を止める
// 150円のパンを買ってくる、残金を表示する
// { console.log(price);
// price -= 150; }

'use strict';

let price = 1000;
while (price > 0)
{
  console.log(price);
  price -= 150;
}

// do while
// 借金？ let hinta = -100;
//１回だけ処理を行う
// do の処理が行われた後に、whileの判定が行われた
// 1 回目はconsole.logを表示する

let hinta = -100;
do
{
  console.log(hinta);
  hinta -= 150;
}
while (hinta > 0);
