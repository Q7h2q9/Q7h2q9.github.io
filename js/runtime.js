function updateRuntime() {
  const createTime = new Date('2025-06-01T00:00:00').getTime();
  const now = new Date().getTime();
  let s = Math.floor((now - createTime) / 1000);
  const years   = Math.floor(s / (365 * 24 * 3600)); s %= 365 * 24 * 3600;
  const days    = Math.floor(s / (24 * 3600));        s %= 24 * 3600;
  const hours   = Math.floor(s / 3600);               s %= 3600;
  const minutes = Math.floor(s / 60);
  const seconds = s % 60;
  const pad = n => n > 9 ? n : '0' + n;
  const el = document.getElementById('runtime');
  if (el) el.innerHTML =
    `本站已运行 ${years} 年 ${days} 天 ${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
}
updateRuntime();
setInterval(updateRuntime, 1000);
