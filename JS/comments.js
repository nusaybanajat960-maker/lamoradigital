function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
            swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );

        // Initialize Swiper
        new Swiper(swiperElement, config);
    });
}

// Run when DOM is loaded
document.addEventListener("DOMContentLoaded", initSwiper);
