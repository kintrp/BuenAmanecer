// NavBar

const toggleButton = document.getElementsByClassName('toggleButton')[0];
const navbarLinks = document.getElementsByClassName('navbarLinks')[0];

toggleButton.addEventListener('click', () => {
    // Wenn die Klasse active nicht bereits auf dem navbarLinks-Element vorhanden ist, wird sie hinzugefügt. 
    navbarLinks.classList.toggle('active');
});

// Karussel

let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Start with the first slide
showSlide(slideIndex);


// FAQ

document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
      // Toggle 'active' class on the clicked question
      question.classList.toggle('active');

      // Get the associated answer div
      const answer = question.nextElementSibling;

      // Toggle the visibility of the answer
      if (answer.style.maxHeight) {
          // Collapse the answer
          answer.style.maxHeight = null;
          question.querySelector('span').textContent = '+'; // Set symbol to '+'
      } else {
          // Expand the answer
          answer.style.maxHeight = answer.scrollHeight + 'px';
          question.querySelector('span').textContent = '×'; // Set symbol to '×'
      }
  });
});

// Scroll

/*

window.addEventListener('scroll', () => {
  const floatingDiv = document.getElementsByClassName('scroll-Up');
  const scrollPosition = window.scrollY; // Liefert die aktuelle vertikale Scroll-Position der Y-Achse.

  //console.log(floatingDiv);

  if (scrollPosition > window.innerHeight) { // Überprüft, ob die Scroll-Position größer als die Höhe des Viewports (100vh) ist
      floatingDiv.style.opacity = 1;  
  } else {
      floatingDiv.style.opacity = 0; 
  }
});

*/







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

  