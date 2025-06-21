document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper for the slider
    new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });

    // Smooth Scroll for "Shop Now" Buttons (Optional)
    document.querySelectorAll('.btn').forEach(btn =>{
        btn.addEventListener('click', e => {
            e.preventDefault();
            const sectionId = btn.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

