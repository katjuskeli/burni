/* jshint esversion: 6 */
/* global challenges, currentPoints */

const countdownElement = document.getElementById("countdown");

function getIndexEndDate() {
  let endDate = new Date("2026-06-08T16:00:00+03:00");

  const extraDayChallenge = challenges.find(
    challenge => challenge.number === "1080"
  );

  if (
    extraDayChallenge &&
    (
      extraDayChallenge.status === "unlocked" ||
      extraDayChallenge.status === "completed" ||
      currentPoints >= extraDayChallenge.points
    )
  ) {
    endDate = new Date("2026-06-09T16:00:00+03:00");
  }

  return endDate;
}

function updateCountdown() {
  if (!countdownElement) {
    return;
  }

  const startDate = new Date("2026-06-01T16:00:00+03:00");
  const endDate = getIndexEndDate();
  const now = new Date();

  if (now < startDate) {
    const difference = startDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);

    countdownElement.textContent =
      `${days} pv ${hours} h ${minutes} min`;

    return;
  }

  if (now >= startDate && now <= endDate) {
    countdownElement.textContent = "🔥 Burnithon on käynnissä! 🔥";
    return;
  }

  countdownElement.textContent = "Burnithon 2.0 on päättynyt ❤️";
}

updateCountdown();
setInterval(updateCountdown, 60000);