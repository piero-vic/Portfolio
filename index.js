// Navigation Toggle
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

const navLinks = Array.from(document.getElementsByClassName('mobile-nav-link'));
navLinks.forEach((element) => element.addEventListener('click', toggle));

// Projects
const projects = [
  {
    name: 'Portfolio Website',
    description: 'Portfolio website to showcase my work. Code is on GitHub. Feel free to check it out.',
    technologies: ['HTML', 'CSS'],
    image: 'desktop-screenshot.png',
    repoLink: 'https://github.com/piero-vic/Portfolio',
    cardId: 0,
  },
  {
    name: 'crypto-prices',
    description: 'A script that requests crypto prices from CoinGecko and writes them to a file in the format required by the Ledger CLI price history.',
    technologies: ['Python', 'Ledger CLI', 'CoinGecko API'],
    image: 'assets/crypto.jpeg',
    repoLink: 'https://github.com/piero-vic/crypto-prices',
    cardId: 1,
  },
  {
    name: 'bootstrap-website',
    description: 'Basic presentation website. Made with Bootstrap.',
    technologies: ['HTML', 'Bootstrap'],
    image: 'assets/bootstrap-webpage.png',
    repoLink: 'https://github.com/piero-vic/bootstrap-website',
    cardId: 2,
  },
  {
    name: 'Patches: A Collection of VCV Rack Patches',
    description: 'VCV Rack is a virtual modular synthesizer. All preset are text files in JSON format so they work great with version control.',
    technologies: ['JSON', 'VCV Rack'],
    image: 'assets/synth-unsplash.jpeg',
    repoLink: 'https://github.com/piero-vic/patches',
    cardId: 3,
  },
];

function createMainCard(project) {
  const workSection = document.getElementById('work-section');
  // Card
  const card = document.createElement('div');
  card.classList = 'd-grid main-card';
  workSection.appendChild(card);
  // Image
  const cardImage = document.createElement('img');
  cardImage.classList = 'main-card-img';
  cardImage.setAttribute('src', project.image);
  cardImage.setAttribute('alt', 'Portfolio Website thumbnail');
  card.appendChild(cardImage);
  // Text Container
  const cardTextContainer = document.createElement('div');
  cardTextContainer.classList = 'd-flex main-card-text-container';
  card.appendChild(cardTextContainer);
  // Title
  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = project.name;
  cardTitle.classList = 'main-card-title';
  cardTextContainer.appendChild(cardTitle);
  // Text
  const cardText = document.createElement('p');
  cardText.innerHTML = project.description;
  cardText.classList = 'main-card-text';
  cardTextContainer.appendChild(cardText);
  // List
  const cardList = document.createElement('ul');
  cardList.classList = 'd-flex main-tag-container';
  // List elements
  project.technologies.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = item;
    listItem.classList = 'main-card-tag';
    cardList.appendChild(listItem);
  });
  cardTextContainer.appendChild(cardList);
  // Button
  const cardButton = document.createElement('button');
  cardButton.innerHTML = 'See Project';
  cardButton.classList = 'main-card-button';
  cardButton.setAttribute('type', 'button');
  cardTextContainer.appendChild(cardButton);

  return card;
}

function createCard(project) {
  const workSection = document.getElementById('work-section');
  // Card
  const card = document.createElement('div');
  card.classList = `d-flex card card-${project.cardId}`;
  workSection.appendChild(card);
  // Title
  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = project.name;
  cardTitle.classList = 'card-title';
  card.appendChild(cardTitle);
  // Text
  const cardText = document.createElement('p');
  cardText.innerHTML = project.description;
  cardText.classList = 'card-text';
  card.appendChild(cardText);
  // List
  const cardList = document.createElement('ul');
  cardList.classList = 'tag-container';
  // List elements
  project.technologies.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = item;
    listItem.classList = 'card-tag';
    cardList.appendChild(listItem);
  });
  card.appendChild(cardList);
  // Button
  const cardButton = document.createElement('button');
  cardButton.innerHTML = 'See Project';
  cardButton.classList = 'card-button';
  cardButton.setAttribute('type', 'button');
  card.appendChild(cardButton);

  return card;
}
