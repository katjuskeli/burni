/* jshint esversion: 6 */
/* global challenges, currentPoints */

const yearElement = document.getElementById('year');
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const revealElements = document.querySelectorAll('.reveal');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

function getChallengeStatus(challenge) {

  if (challenge.status) {
    return challenge.status;
  }

  if (currentPoints >= challenge.points) {
    return "unlocked";
  }

  return "locked";
}

const merchChallenge = challenges.find(
  challenge => challenge.number === "100"
);

const merchLink = document.getElementById("merch-link");

if (merchChallenge && merchLink) {

  const merchStatus = getChallengeStatus(merchChallenge);

  if (
    merchStatus === "unlocked" ||
    merchStatus === "scheduled" ||
    merchStatus === "completed"
  ) {
    merchLink.style.display = "inline-block";
  }
}