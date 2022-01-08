// JS11_for/ 8.1.2022
'use strict';
/*変数宣言、
繰り返しする為の条件準備、iが10より少なかったら、
この(console.log)処理を行う、
毎回i　に　1を足す */
for(let i = 0; i < 10; i++)
{
  console.log(i); // 'Hello world'　処理内容
}

// 6 を跳ばす　スキップする
for(var a = 0; a < 10; a++)
{
  if(a === 6)
  {
    continue;
  }
  console.log(a);
}

// if 文の条件しきが成立したら、この繰り返しを止める　
for(let y = 0; y < 10; y++)
{
  if(y === 6)
  {
    break;
  }
  console.log(y);
}
