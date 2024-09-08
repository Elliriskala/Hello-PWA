'use strict';

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

const divElement = document.createElement('div');
divElement.innerHTML = 'Hello, PWA!';

document.body.appendChild(divElement);


const paragraphElement = document.createElement('p');

paragraphElement.innerHTML = 'This is a simple Progressive Web App (PWA) example.';

divElement.append(paragraphElement);
