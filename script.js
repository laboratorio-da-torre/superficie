const video = document.getElementById("filmVideo");
const videoMessage = document.getElementById("videoMessage");
const atmosphere = document.querySelector(".scroll-atmosphere");

/* --------------------------------------------------
   VIDEO
   The only playback control is keyboard SPACE.
-------------------------------------------------- */

document.addEventListener("keydown", (event) => {
  if (event.code !== "Space") return;

  /*
    Prevent the browser from scrolling when SPACE is pressed.
  */
  event.preventDefault();

  if (video.paused) {
    video.play();
    showVideoMessage("playing");
  } else {
    video.pause();
    showVideoMessage("paused");
  }
});

function showVideoMessage(message) {
  videoMessage.textContent = message;
  videoMessage.style.opacity = "1";

  clearTimeout(showVideoMessage.timeout);

  showVideoMessage.timeout = setTimeout(() => {
    videoMessage.style.opacity = "";
  }, 900);
}

/* --------------------------------------------------
   SCROLL ATMOSPHERE
   The page begins grey and becomes black as the user
   moves down through the film, text and credits.
-------------------------------------------------- */

let ticking = false;

function updateAtmosphere() {
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const scroll = window.scrollY;
  const progress = maxScroll > 0
    ? Math.min(scroll / maxScroll, 1)
    : 0;

  /*
    The first ~60% of the page contains the gradual transition.
    After that the background stays essentially black.
  */
  const blackProgress = Math.min(progress / 0.62, 1);

  const grey = Math.round(133 - (133 * blackProgress));
  const mid = Math.round(79 - (79 * blackProgress));

  atmosphere.style.background = `
    radial-gradient(
      ellipse at 50% 20%,
      rgba(190, 190, 185, ${0.24 - blackProgress * 0.20}) 0%,
      rgba(100, 100, 97, ${0.12 - blackProgress * 0.10}) 28%,
      rgba(0, 0, 0, 0) 58%
    ),
    linear-gradient(
      180deg,
      rgb(${grey}, ${grey}, ${grey - 2}) 0%,
      rgb(${mid}, ${mid}, ${mid - 2}) 34%,
      #0a0a09 68%,
      #000 100%
    )
  `;

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateAtmosphere);
    ticking = true;
  }
}, { passive: true });

updateAtmosphere();

/* --------------------------------------------------
   OPTIONAL: stop autoplay if browser blocks it.
   Because the video is muted, most browsers allow it.
-------------------------------------------------- */

video.play().catch(() => {
  showVideoMessage("espaço — iniciar");
});
