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
