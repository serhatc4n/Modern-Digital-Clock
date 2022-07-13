const hour = document.getElementById('hour');
const minunte = document.getElementById('min');
const seconds = document.getElementById('sec');

const clock = setInterval(function time()  {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  hour.textContent = hr;
  minunte.textContent = min;
  seconds.textContent = sec;
}, 1000);