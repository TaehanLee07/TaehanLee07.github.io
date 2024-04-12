const sideBar = document.querySelector('.side-bar');
const darkenBackground = document.querySelector('.darken-background');

sideBar.addEventListener('mouseenter', () => {
    darkenBackground.classList.add('show');
});

sideBar.addEventListener('mouseleave', () => {
    darkenBackground.classList.remove('show');
});
