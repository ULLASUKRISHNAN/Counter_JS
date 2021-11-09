/**============================================
 *               METHOD 1
 *=============================================**/

// const decrease = document.querySelector('.decrease');
// const reset = document.querySelector('.reset');
// const increase = document.querySelector('.increase');
// let value = document.querySelector('#value');

// decrease.addEventListener('click', function (e) {
//   let newValue = Number(value.textContent);
//   newValue--;
//   value.textContent = newValue;
// });

// reset.addEventListener('click', () => {
//   value.textContent = 0;
// });

// increase.addEventListener('click', () => {
//   let newValue = Number(value.textContent);
//   newValue++;
//   value.textContent = newValue;
// });

/**============================================
 *               METHOD 2
 *=============================================**/

let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log(btns);
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = 'black';
    }
    value.textContent = count;
  });
});
