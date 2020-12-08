document.body.insertAdjacentHTML('beforeend', '<div id="cont">' + '<div></div>'.repeat(25) + '</div>');

document.querySelectorAll('#cont>div').forEach(el => {
   setInterval(() => {
      el.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
   }, 1000);
});