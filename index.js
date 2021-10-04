function changeButton() {
  const hamburgerButton = document.getElementById('hamburger-btn');
  if (hamburgerButton.getAttribute('src') === 'assets/hamburger.svg') {
    hamburgerButton.setAttribute('src', 'assets/cancel.svg');
  } else {
    hamburgerButton.setAttribute('src', 'assets/hamburger.svg');
  }
}

function toggle() {
  const mobileMenu = document.getElementById('mobile-nav-list');
  mobileMenu.classList.toggle('toggle-navbar');
  changeButton();
}

// Add event listener to navigation links
const navLinks = Array.from(document.getElementsByClassName('mobile-nav-link'));
navLinks.forEach((element) => element.addEventListener('click', toggle));
