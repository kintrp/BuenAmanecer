const toggleButton = document.getElementsByClassName('toggleButton')[0];
const navbarLinks = document.getElementsByClassName('navbarLinks')[0];

toggleButton.addEventListener('click', () => {
    // Wenn die Klasse active nicht bereits auf dem navbarLinks-Element vorhanden ist, wird sie hinzugefügt. 
    navbarLinks.classList.toggle('active');
});


// Filter

/* function filterProducts(category) {
    // Alle Produkt-Elemente abrufen
    const productos = document.querySelectorAll('.product');
    
    // Über alle Produkte iterieren
    productos.forEach(product => {
      if (category === 'alle') {
        // Alle Produkte anzeigen
        product.style.display = 'flex';
      } else if (product.classList.contains(category)) {
        // Produkte der ausgewählten Kategorie anzeigen
        product.style.display = 'flex';
      } else {
        // Andere Produkte ausblenden
        product.style.display = 'none';
      }
    });
  } 
    */
  