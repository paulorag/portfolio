export function initSmoothScroll() {
    const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

    function getDistanceFromTheTop(element) {
        const id = element.getAttribute("href");
        return document.querySelector(id).offsetTop;
    }

    function scrollToSection(event) {
        event.preventDefault();
        const distanceFromTheTop = getDistanceFromTheTop(event.target) - 20;
        smoothScrollTo(0, distanceFromTheTop);
    }

    menuLinks.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });
}

export function smoothScrollTo(endX, endY, duration = 800) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    const easeInOutQuart = (t, b, c, d) => {
        if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
        return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60);
}
