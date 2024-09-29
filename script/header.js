/* Добавление по нажатию */
function toggleMenu() {
    // const menuToggle = document.querySelector('.menuToggle');
    const menuToggle = document.querySelector('.manu-btn');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}


window.addEventListener('scroll',
function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 10);
});



