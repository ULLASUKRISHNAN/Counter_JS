// Method 1 to implement counter function
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
let value = document.querySelector('#value');

decrease.addEventListener('click', function (e) {
  let newValue = Number(value.textContent);
  newValue--;
  value.textContent = newValue;
});

reset.addEventListener('click', () => {
  value.textContent = 0;
});

increase.addEventListener('click', () => {
  let newValue = Number(value.textContent);
  newValue++;
  value.textContent = newValue;
});
