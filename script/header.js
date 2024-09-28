/* Добавление по нажатию */
function toggleMenu() {
    // const menuToggle = document.querySelector('.menuToggle');
    const menuToggle = document.querySelector('.manu-btn');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}