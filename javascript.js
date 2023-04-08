var typed = new Typed(".auto-type ", {
    strings: ["developer ", "front developer ", "website developer ", "website designer "],
    typedSpeed: 100,
    backSpeed: 100,
    loop: true,
})
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.inner  , .services', {
    origin: 'top'
});
ScrollReveal().reveal('.row , .row2 ', {
    origin: 'bottom'
});
ScrollReveal().reveal('.inner h1', {
    origin: 'left'
});
ScrollReveal().reveal('.inner p', {
    origin: 'right'
});
ScrollReveal().reveal(".my-image img", {
    origin: "right",
});
ScrollReveal().reveal(".watsapp", {
    origin: "bottom",
});

window.addEventListener('scroll', function() {
    let header = document.getElementById('header')
    if (window.pageYOffset >= 20) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
})

$(document).ready(function() {
    $("#search").focus(function() {
        $(".search-box").addClass("border-searching");
        $(".search-icon").addClass("si-rotate");
    });
    $("#search").blur(function() {
        $(".search-box").removeClass("border-searching");
        $(".search-icon").removeClass("si-rotate");
    });
    $("#search").keyup(function() {
        if ($(this).val().length > 0) {
            $(".go-icon").addClass("go-in");
        } else {
            $(".go-icon").removeClass("go-in");
        }
    });
    $(".go-icon").click(function() {
        $(".search-form").submit();
    });
});