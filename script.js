// Dynamisch effect voor het tonen van secties bij scrollen
window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
        let position = section.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0.5;
            section.style.transform = 'translateY(50px)';
        }
    });
});
