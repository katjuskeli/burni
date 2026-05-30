/* jshint esversion: 6 */
/* global challenges, currentPoints, schedule */

const startDate = new Date("2026-06-01T16:00:00+03:00");
let endDate = new Date("2026-06-08T16:00:00+03:00");

const extraDayChallenge = challenges.find(
  challenge => challenge.number === "1080"
);

if (
  extraDayChallenge &&
  (
    extraDayChallenge.status === "completed" ||
    currentPoints >= extraDayChallenge.points
  )
) {
  endDate = new Date("2026-06-09T16:00:00+03:00");
}

const now = new Date();

let liveStatus;

if (now < startDate) {
  liveStatus = {
    status: "upcoming",
    badge: "TULOSSA",
    title: "Burnithon alkaa pian",
    text: "Subathon käynnistyy maanantaina klo 16:00."
  };
} else if (now >= startDate && now <= endDate) {
  liveStatus = {
    status: "live",
    badge: "LIVE",
    title: "Burnithon käynnissä",
    text: "Seuraa striimiä Twitchissä ja tarkista seuraavat ohjelmanumerot tästä."
  };
} else {
  liveStatus = {
    status: "ended",
    badge: "PÄÄTTYNYT",
    title: "Burnithon 2.0 on päättynyt",
    text: "Kiitos kaikille mukana olleille!"
  };
}


const liveBox = document.getElementById("live-box");

if (liveBox) {
  liveBox.innerHTML = `
    <div class="live-box ${liveStatus.status}">
      <span class="live-badge">${liveStatus.badge}</span>
      <h3>${liveStatus.title}</h3>
      <p>${liveStatus.text}</p>
    </div>
  `;
}

const challengeList = document.getElementById("challenge-list");

const icons = {
  locked: "🔒",
  unlocked: "🔓",
  scheduled: "📺",
  completed: "✅"
};

function getChallengeStatus(challenge) {
  if (challenge.status) {
    return challenge.status;
  }

  if (currentPoints >= challenge.points) {
    return "unlocked";
  }

  return "locked";
}

if (challengeList) {
  challenges.forEach((challenge) => {
    const status = getChallengeStatus(challenge);

    const article = document.createElement("article");
    article.className = `challenge-row ${status}`;

    article.innerHTML = `
      <span class="channel">${challenge.number}</span>

      <div>
        <h2>${challenge.title}</h2>
        <p>${challenge.description}</p>
      </div>

      <span class="status">${icons[status]}</span>
    `;

    challengeList.appendChild(article);
  });
}

const scheduleList = document.getElementById("schedule-list");

if (scheduleList) {
  schedule.forEach((item) => {
    const article = document.createElement("article");
    article.className = "schedule-item";

    article.innerHTML = `
      <span class="schedule-time">${item.time}</span>
      <h3>${item.title}</h3>
      <p>${item.label}</p>
    `;

    scheduleList.appendChild(article);
  });
}