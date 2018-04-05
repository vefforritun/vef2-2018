import './styles.css';
import Logo from './html5.png';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  el.classList.add('important');
  el.textContent = 'Danger! Danger!';

  const img = document.createElement('img');
  img.src = Logo;
  el.appendChild(img);

  document.body.appendChild(el);
});
