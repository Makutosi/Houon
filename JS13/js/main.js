// JS13_Ennuste/ 7.1.2022
'use strict';
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', ()=> {
  const num = Math.random();
　// random 0-0.99999999自動で選ばれる
  if (num < 0.2)
  {
    result.textContent = 'ラッキ～❤';
  }
  else if (num < 0.5)
  {
    result.textContent = 'まあまあ☺';
  }
  else if (num < 0.8)
  {
    result.textContent = '落ち着いて❤';
  }
  else
  {
    result.textContent = '今日のベストを尽くそう❣'
  }
});

/*
btn.addEventListener('click', ()=>{

});
*/
