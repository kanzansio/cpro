
  if ('loading' in HTMLImageElement.prototype) {
    console.log('El navegador soporta `lazy-loading`...');
  } else {
   console.log('`lazy-loading` no soportado...');
 }

(async () => {
 if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll("img.lazyload");
     images.forEach(img => {
         img.src = img.dataset.src;
     });  } else {
     // Importamos dinámicamente la libreria `lazysizes`
     const lazySizesLib = await import('/lazysizes.min.js');
     // Se inicia lazysizes (lee el atributo `data-src` y la clase `lazyload`)
     lazySizes.init(); 
  }
})();
