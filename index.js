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
    openLink() {
      window.open(this.repoLink, '_blank');
    },
  },
  {
    name: 'crypto-prices',
    description: 'A script that requests crypto prices from CoinGecko and writes them to a file in the format required by the Ledger CLI price history.',
    technologies: ['Python', 'Ledger CLI', 'CoinGecko API'],
    image: 'assets/crypto.jpeg',
    repoLink: 'https://github.com/piero-vic/crypto-prices',
    cardId: 1,
    openLink() {
      window.open(this.repoLink, '_blank');
    },
  },
  {
    name: 'bootstrap-website',
    description: 'Basic presentation website. Made with Bootstrap.',
    technologies: ['HTML', 'Bootstrap'],
    image: 'assets/bootstrap-webpage.png',
    repoLink: 'https://github.com/piero-vic/bootstrap-website',
    cardId: 2,
    openLink() {
      window.open(this.repoLink, '_blank');
    },
  },
  {
    name: 'Patches: A Collection of VCV Rack Patches',
    description: 'VCV Rack is a virtual modular synthesizer. All preset are text files in JSON format so they work great with version control.',
    technologies: ['JSON', 'VCV Rack'],
    image: 'assets/synth-unsplash.jpeg',
    repoLink: 'https://github.com/piero-vic/patches',
    cardId: 3,
    openLink() {
      window.open(this.repoLink, '_blank');
    },
  },
];

// Card Toggle
function toggleCard() {
  const modal = document.getElementById('modal-container');
  modal.classList.toggle('modal-toggle');
}

function openProject(project) {
  document.getElementById('modal-title').innerHTML = project.name;
  const modalList = document.getElementById('modal-list');
  modalList.innerHTML = '';
  project.technologies.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = item;
    listItem.classList = 'modal-tag';
    modalList.appendChild(listItem);
  });
  document.getElementById('modal-img').setAttribute('src', project.image);
  document.getElementById('modal-text').innerHTML = project.description;
  document.getElementById('modal-button').addEventListener('click', () => {
    project.openLink();
  });
  const cancelButton = document.getElementById('cancel-button');
  cancelButton.addEventListener('click', toggleCard);
  toggleCard();
}

function createMainCard(project) {
  const workSection = document.getElementById('work-section');
  const card = document.createElement('div');
  card.classList = 'd-grid main-card';
  workSection.appendChild(card);
  const cardImage = document.createElement('img');
  cardImage.classList = 'main-card-img';
  cardImage.setAttribute('src', project.image);
  cardImage.setAttribute('alt', 'Portfolio Website thumbnail');
  card.appendChild(cardImage);
  const cardTextContainer = document.createElement('div');
  cardTextContainer.classList = 'd-flex main-card-text-container';
  card.appendChild(cardTextContainer);
  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = project.name;
  cardTitle.classList = 'main-card-title';
  cardTextContainer.appendChild(cardTitle);
  const cardText = document.createElement('p');
  cardText.innerHTML = project.description;
  cardText.classList = 'main-card-text';
  cardTextContainer.appendChild(cardText);
  const cardList = document.createElement('ul');
  cardList.classList = 'd-flex main-tag-container';
  project.technologies.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = item;
    listItem.classList = 'main-card-tag';
    cardList.appendChild(listItem);
  });
  cardTextContainer.appendChild(cardList);
  const cardButton = document.createElement('button');
  cardButton.innerHTML = 'See Project';
  cardButton.classList = 'main-card-button';
  cardButton.setAttribute('type', 'button');
  cardButton.addEventListener('click', () => {
    openProject(project);
  });
  cardTextContainer.appendChild(cardButton);
}

function createCard(project) {
  const workSection = document.getElementById('work-section');
  const card = document.createElement('div');
  card.classList = `d-flex card card-${project.cardId}`;
  workSection.appendChild(card);
  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = project.name;
  cardTitle.classList = 'card-title';
  card.appendChild(cardTitle);
  const cardText = document.createElement('p');
  cardText.innerHTML = project.description;
  cardText.classList = 'card-text';
  card.appendChild(cardText);
  const cardList = document.createElement('ul');
  cardList.classList = 'tag-container';
  project.technologies.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = item;
    listItem.classList = 'card-tag';
    cardList.appendChild(listItem);
  });
  card.appendChild(cardList);
  const cardButton = document.createElement('button');
  cardButton.innerHTML = 'See Project';
  cardButton.classList = 'card-button';
  cardButton.setAttribute('type', 'button');
  cardButton.addEventListener('click', () => {
    openProject(project);
  });
  card.appendChild(cardButton);
}

// Fill webpage
createMainCard(projects[0]);
createCard(projects[1]);
createCard(projects[2]);
createCard(projects[3]);

// Validation
const form = document.getElementById('contact-form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const emailRegEx = new RegExp('^[a-z0-9-]+@[a-z0-9-]+\.[a-z0-9-.]+$');
    const message = document.getElementById('message').value

    const nameValidation = name.length !== 0;
    const emailValidation = emailRegEx.test(email);
    const messageValidation = message.length !== 0;

    console.log(nameValidation);
    console.log(emailValidation);
    console.log(messageValidation);
});
