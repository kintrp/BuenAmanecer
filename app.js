const toggleButton = document.getElementsByClassName('toggleButton')[0];
const navbarLinks = document.getElementsByClassName('navbarLinks')[0];

toggleButton.addEventListener('click', () => {
    // Wenn die Klasse active nicht bereits auf dem navbarLinks-Element vorhanden ist, wird sie hinzugefügt. 
    navbarLinks.classList.toggle('active');
});