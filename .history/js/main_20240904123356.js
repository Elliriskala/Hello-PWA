'use strict';

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

const target = document.querySelector('.container')
const divElement = document.createElement('div');
const paragraphElement = document.createElement('p');

paragraphElement.innerHTML = 'This is a simple Progressive Web App (PWA) example.';

divElement.append(paragraphElement);
target.appendChild(divElement);
