// Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд.
// Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();

// Advanced зробіть так, щоб квадрати змінювали колір раз на секунду.
// Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати функцію generateBlocksInterval(); 

const generateBlocks = () => {
   document.body.insertAdjacentHTML('beforeend', '<div id="cont">' + '<div></div>'.repeat(25) + '</div>');
   document.querySelectorAll('#cont>div').forEach(el => {
      el.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
   });
}
generateBlocks();

const generateBlocksInterval = () => {
   document.querySelectorAll('#cont>div').forEach(el => {
      el.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
   })
}
setInterval(() => generateBlocksInterval(), 1000);
