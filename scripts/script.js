gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger); // регистрируем плагин ScrollTrigger.

document.querySelectorAll('.nav-link').forEach(link => { // находим все элементы с классом nav-link.
    link.addEventListener('click', (e) => {
        e.preventDefault(); // отменяем стандартное поведение ссылки.
        const target = link.getAttribute('href'); // получаем значение атрибута href.

        if (target && document.querySelector(target)) { // проверяем, существует ли target и является ли он элементом.
            gsap.to(window, { // плавно прокручиваем страницу к элементу с классом nav-link. target - это значение атрибута href.
                duration: 1,
                scrollTo: { y: target, offsetY: 140 },
                ease: "power2.out" // эффект плавного перехода.
            });
        }
    });
});


gsap.from(".header, .hero", { y: -20, opacity: 0, duration: 1, stagger: 0.2 }); // плавно прокручиваем страницу к элементу с классом nav-link.

gsap.utils.toArray(".section-top, .speakers-grid, .advantages-grid, .price-grid").forEach((section )=> {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
    });
});
