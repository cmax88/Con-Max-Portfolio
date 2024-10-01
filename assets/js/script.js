const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.pageX }px`;
    cursorGlow.style.top = `${e.pageY }px`;
});
