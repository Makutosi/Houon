// JS15_kalenteri/ 9.1.2022
/*現在日時取得  F12
月のデータは０から始まる　+１
Day曜日 Date 日付け
*/

'use strict';
const date = new Date();
const year = date.getFullYear();
// get.Month() + 1  0 + 1 = １月
const month = date.getMonth() + 1;
console.log(date);
console.log(year);
console.log(month);

// 最初の日とその曜日
//　month -1 来月のデータにならないように、0 = 1
const firstDate = new Date(year, month -1, 1);
const firstDay = firstDate.getDay();　//曜日のデータ
console.log(firstDay);

// 来月の一つ前の日、つまり今月の最後の日
const lastDate = new Date(year, month, 0);
console.log(lastDate);

// その日のデータだけを取得
const lastDayCount = lastDate.getDate();
console.log(lastDayCount);

let dayCount = 1;

let createHtml = '';
createHtml = '<h1>' + year + '/' + month + '</h1>'
console.log(createHtml);

createHtml += '<table>' + '<tr>';
// 7x
const weeks = ['日', '月', '火', '水', '木', '金', '土'];
for (let i = 0; i < weeks.length; i++)
{
  createHtml += '<td>' + weeks[i] + '</td>';
}
createHtml += '</tr>';
console.log(createHtml);

// tr 行を６行作る
for (let n = 0; n < 6; n++)
{
  createHtml += '<tr>';
  //d は縦の行
  // 7x
     for(let d = 0; d <7; d++)
     {
       if(n == 0 && d < firstDay)
       {
         createHtml += '<td></td>'
       }
       else if(dayCount > lastDayCount) //空のtd
       {
         createHtml += '<td></td>'
       }
       else
       {
         createHtml += '<td>' + dayCount + '</td>';
         dayCount++
       }
     }
     createHtml += '</tr>';
   }
   createHtml += '</table>'

   document.querySelector('#calender').innerHTML = createHtml;
