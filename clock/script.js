const clock = () => {
  const hour = document.getElementById('hour');
  const minute = document.getElementById('minute');
  const seconds = document.getElementById('seconds');
  const ampm = document.getElementById('ampm');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = 'AM';

  if (h > 12) {
    h -= 12;
    am = 'PM';
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
};

clock();

setInterval(clock, 1000);
