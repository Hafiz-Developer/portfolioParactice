ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.row , .row2 ', {
    origin: 'bottom'
});
ScrollReveal().reveal(".text h2", {
    origin: "top",
});
ScrollReveal().reveal(".text p", {
    origin: "left",
});
ScrollReveal().reveal(".text strong , .row", {
    origin: "bottom",
});
ScrollReveal().reveal(".text a", {
    origin: "bottom",
});
ScrollReveal().reveal(".watsapp", {
    origin: "right",
});
window.addEventListener('scroll', function() {
    let header = document.getElementById('header')
    if (window.pageYOffset >= 20) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
})