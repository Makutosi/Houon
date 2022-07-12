// JS15_Hamburger Button/ 8.7.2022

'use strict';
{
  const btn = document.querySelector('.btn');
  const container = document.querySelector('.container');
  btn.addEventListener('click', () =>
  {
    btn.classList.toggle('active');
    container.classList.toggle('active');
  });
}

/* righht click> hamburger button click> active */
