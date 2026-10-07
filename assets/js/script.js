const cover = document.querySelector("#cover");
const invitation = document.querySelector("#invitation");
const openButton = document.querySelector("#openInvitation");
const bottomNav = document.querySelector("#bottomNav");
const backgroundMusic = document.querySelector("#backgroundMusic");
const musicToggle = document.querySelector("#musicToggle");
const musicState = musicToggle.querySelector(".music-toggle__state");
const invitationData = window.INVITATION_DATA;

if (!invitationData) {
  throw new Error("Data undangan tidak ditemukan.");
}

document.querySelectorAll("[data-field]").forEach((element) => {
  const value = invitationData[element.dataset.field];
  if (value) element.textContent = value;
});

document.querySelector("#mapsLink").href = invitationData.mapsUrl;
document.querySelector(".countdown").dataset.eventDate = invitationData.eventDateISO;
document.title = `Undangan Ngunduh Mantu ${invitationData.groomFirst} & ${invitationData.brideFirst}`;

backgroundMusic.volume = 0.45;

function syncMusicButton() {
  const isPlaying = !backgroundMusic.paused;
  musicToggle.classList.toggle("is-playing", isPlaying);
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicToggle.setAttribute("aria-label", isPlaying ? "Matikan musik" : "Nyalakan musik");
  musicToggle.title = isPlaying ? "Matikan musik" : "Nyalakan musik";
  musicState.textContent = isPlaying ? "ON" : "OFF";
}

function playMusic() {
  const playRequest = backgroundMusic.play();
  if (playRequest) playRequest.catch(syncMusicButton);
}

function enterFullscreen() {
  const page = document.documentElement;
  if (document.fullscreenElement) return;

  const request = page.requestFullscreen?.bind(page) || page.webkitRequestFullscreen?.bind(page);
  if (!request) return;

  try {
    const fullscreenRequest = request({ navigationUI: "hide" });
    if (fullscreenRequest?.catch) fullscreenRequest.catch(() => {});
  } catch (_) {
    // Beberapa browser, terutama iOS, tidak mendukung fullscreen untuk halaman biasa.
  }
}

openButton.addEventListener("click", () => {
  enterFullscreen();
  playMusic();
  cover.classList.add("is-open");
  document.body.classList.remove("is-locked");
  invitation.setAttribute("aria-hidden", "false");
  bottomNav.classList.add("is-visible");
  musicToggle.hidden = false;
  window.requestAnimationFrame(() => musicToggle.classList.add("is-visible"));
  window.setTimeout(() => document.querySelector(".hero").focus?.(), 800);
});

musicToggle.addEventListener("click", () => {
  if (backgroundMusic.paused) playMusic();
  else backgroundMusic.pause();
});

backgroundMusic.addEventListener("play", syncMusicButton);
backgroundMusic.addEventListener("pause", syncMusicButton);
backgroundMusic.addEventListener("ended", syncMusicButton);

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px 80px", threshold: 0.1 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const countdown = document.querySelector(".countdown");
const eventTime = new Date(countdown.dataset.eventDate).getTime();
const values = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

function updateCountdown() {
  const distance = Math.max(0, eventTime - Date.now());
  const day = Math.floor(distance / 86_400_000);
  const hour = Math.floor((distance % 86_400_000) / 3_600_000);
  const minute = Math.floor((distance % 3_600_000) / 60_000);
  const second = Math.floor((distance % 60_000) / 1_000);

  values.days.textContent = String(day).padStart(2, "0");
  values.hours.textContent = String(hour).padStart(2, "0");
  values.minutes.textContent = String(minute).padStart(2, "0");
  values.seconds.textContent = String(second).padStart(2, "0");
}

updateCountdown();
const countdownTimer = window.setInterval(() => {
  if (!document.hidden) updateCountdown();
  if (eventTime <= Date.now()) window.clearInterval(countdownTimer);
}, 1_000);

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) updateCountdown();
});
