gsap.registerPlugin(ScrollToPlugin);

document.querySelectorAll('.nav-link').forEach(link => { // находим все элементы с классом nav-link.
    link.addEventListener('click', (e) => {
        e.preventDefault(); // отменяем стандартное поведение ссылки.
        const target = link.getAttribute('href'); // получаем значение атрибута href.

        if (target && document.querySelector(target)) { // проверяем, существует ли target и является ли он элементом.
            gsap.to(window, { // плавно прокручиваем страницу к элементу с классом nav-link. target - это значение атрибута href.
                duration: 1,
                scrollTo: { y: target, offsetY: 5 },
                ease: "power2.out" // эффект плавного перехода.
            });
        }
    });
});