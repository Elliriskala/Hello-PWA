'use strict';

const target = document.querySelector('.fullscreen')
const divElement = document.createElement('div');
const paragraphElement = document.createElement('p');

paragraphElement.innerHTML = 'This is a simple Progressive Web App (PWA) example.';

divElement.appendChild(paragraphElement);
target.appendChild(divElement);

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

