// NavBar

const toggleButton = document.getElementsByClassName('toggleButton')[0];
const navbarLinks = document.getElementsByClassName('navbarLinks')[0];

toggleButton.addEventListener('click', () => {
    // Wenn die Klasse active nicht bereits auf dem navbarLinks-Element vorhanden ist, wird sie hinzugefügt. 
    navbarLinks.classList.toggle('active');
});

// Karussell
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    const carouselImages = document.querySelector('.carousel-images');

    if (!carouselImages) {
        console.error('Element mit der Klasse .carousel-images wurde nicht gefunden.');
        return;
    }

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    // Start with the first slide
    showSlide(slideIndex);

    // Event-Listener für die Karussell-Steuerung hinzufügen
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }

    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }

    // FAQ
    document.querySelectorAll('.faq-question').forEach((question) => {
        question.addEventListener('click', () => {
            console.log("question clicked");

            question.classList.toggle('active');
            const answer = question.nextElementSibling;

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                question.querySelector('span').textContent = '+';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.querySelector('span').textContent = '×';
            }
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite
    const formData = new FormData(this);
    
    try {
        const response = await fetch('send_email.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.text();
        
        let responseMessage = document.getElementById('responseMessage');
        if (result === 'success') {
            responseMessage.innerHTML = '¡Correo enviado con éxito!';
            responseMessage.style.color = 'green';
        } else {
            responseMessage.innerHTML = 'Hubo un error al enviar el correo.';
            responseMessage.style.color = 'red';
        }
        responseMessage.style.display = 'block';
    } catch (error) {
        document.getElementById('responseMessage').innerHTML = 'Error al conectar con el servidor.';
        document.getElementById('responseMessage').style.color = 'red';
        document.getElementById('responseMessage').style.display = 'block';
    }
});
