const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');

hamburgerIcon.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-open');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-open');
});