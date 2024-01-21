// header scroll effect

window.addEventListener('scroll', function() {
    let header = document.getElementById('tbc-header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});