import $ from 'jquery';

import './scss/style.scss';

let enableHandler = true;

const handleMouseMove = (event) => {
  const scale = (Math.floor((Math.random() * 100) + 1) / 100) + 1;
  const rotate = Math.floor(Math.random() * 360) + 1;
  const type = Math.floor(Math.random() * 10) + 1;

  console.log(type);

  let moduleStyle = `top: ${event.clientY - 64}px;`;
  moduleStyle = `${moduleStyle} left: ${event.clientX - 64}px;`;
  moduleStyle = `${moduleStyle} transform: scale(${scale}) rotate(${rotate}deg);`;
  moduleStyle = `${moduleStyle} background-image: url(assets/images/module-${type}.svg);`;

  const $module = $(`<div class="module" style="${moduleStyle}" />`);

  $('body').append($module);
}

const onMousemove = (event) => {
  if (enableHandler) {
      handleMouseMove(event);
      enableHandler = false;
  }
}

window.setInterval(() => { enableHandler = true; }, 75);

$('body').mousemove(onMousemove);
