function toggle() {
  const mobileMenu = document.getElementById('mobile-nav-list');
  mobileMenu.classList.toggle('toggle-navbar');
}

// Add event listener to navigation links
const navLinks = Array.from(document.getElementsByClassName('mobile-nav-link'));
navLinks.forEach((element) => element.addEventListener('click', toggle));
