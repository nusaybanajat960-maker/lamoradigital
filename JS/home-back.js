document.addEventListener("DOMContentLoaded", () => {
    const typedSpan = document.querySelector(".typed");
    const cursorSpan = document.querySelector(".typed-cursor");

    if (typedSpan) {
        const items = typedSpan.getAttribute("data-typed-items").split(",");
        let itemIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        let deletingSpeed = 50;
        let delayBetweenWords = 1500;

        function type() {
            const currentItem = items[itemIndex].trim();

            if (!isDeleting) {
                typedSpan.textContent = currentItem.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentItem.length) {
                    isDeleting = true;
                    setTimeout(type, delayBetweenWords);
                    return;
                }
            } else {
                typedSpan.textContent = currentItem.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    itemIndex = (itemIndex + 1) % items.length;
                }
            }

            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }

        type();

        // Cursor blinking effect
        setInterval(() => {
            cursorSpan.style.opacity = (cursorSpan.style.opacity === "0") ? "1" : "0";
        }, 500);
    }
});
