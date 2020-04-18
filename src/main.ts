import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  window.addEventListener('resize', redimensionnement, false);
 
  function redimensionnement() {
     if("matchMedia" in window) { // Détection
      if(window.matchMedia("(min-width:768px)").matches) {
        document.getElementById("hamburger").className = document.getElementById("hamburger").className.replace( /(?:^|\s)in(?!\S)/g , "" );
      } else {
   
      }
    }
  }