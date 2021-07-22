const btn = document.getElementById('checkbox');
const cssFile = document.getElementById('cssFile');
const userConfig = window.matchMedia('(prefers-color-scheme: dark)');
const darkFile = 'css/dark.css';
const lightFile = 'css/light.css';

/* By default set the user default theme */
if (userConfig.matches) {
  cssFile.href = darkFile;
  btn.click();
} else {
  cssFile.href = lightFile;
}

if (localStorage.getItem('dark-theme') === 'true') {
  cssFile.href = darkFile;
  if (!btn.checked) {
    btn.click();
  }
} else if (localStorage.getItem('dark-theme') === 'false') {
  if (btn.checked) {
    !btn.click();
  }
  cssFile.href = lightFile;
}

btn.addEventListener('change', () => {
  if (btn.checked === true) {
    cssFile.href = darkFile;
    localStorage.setItem('dark-theme', 'true');
  } else {
    cssFile.href = lightFile;
    localStorage.setItem('dark-theme', 'false');
  }
});
