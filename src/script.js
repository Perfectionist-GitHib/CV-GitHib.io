import './style.css'
// Элементы
const openSidebarButton = document.getElementById('open-sidebar');
const closeSidebarButton = document.getElementById('close-sidebar');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

// Открыть боковую панель
openSidebarButton.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('active'); 
}); 

// Закрыть боковую панель
closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});

// Закрыть панель при клике на затемнение
overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});