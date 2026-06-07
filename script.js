/* =========================
   SCROLL REVEAL ANIMATIONS
========================= */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((section) => {

    const windowHeight = window.innerHeight;

    const revealTop =
      section.getBoundingClientRect().top;

    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){

      section.classList.add("active");

    }

  });

});

/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{

  cursor.style.left = e.clientX + "px";

  cursor.style.top = e.clientY + "px";

});

/* =========================
   CURSOR HOVER EFFECT
========================= */

const hoverElements =
document.querySelectorAll(
  "a, button, img"
);

hoverElements.forEach((element)=>{

  element.addEventListener("mouseenter",()=>{

    cursor.classList.add("hover");

  });

  element.addEventListener("mouseleave",()=>{

    cursor.classList.remove("hover");

  });

});

/* =========================
   HERO PARALLAX EFFECT
========================= */

const heroBg =
document.querySelector(".hero-bg");

window.addEventListener("mousemove",(e)=>{

  const x =
  (window.innerWidth / 2 - e.pageX) / 80;

  const y =
  (window.innerHeight / 2 - e.pageY) / 80;

  heroBg.style.transform =
  `translate(${x}px, ${y}px) scale(1.05)`;

});

/* =========================
   SMOOTH FADE FOR TIMELINE
========================= */

const timelineCards =
document.querySelectorAll(".timeline-card");

window.addEventListener("scroll",()=>{

  timelineCards.forEach((card)=>{

    const rect =
    card.getBoundingClientRect();

    if(rect.top < window.innerHeight - 100){

      card.style.opacity = "1";

      card.style.transform =
      "translateY(0px)";

    }

  });

});

/* =========================
   INITIAL TIMELINE STYLES
========================= */

timelineCards.forEach((card)=>{

  card.style.opacity = "0";

  card.style.transform =
  "translateY(80px)";

  card.style.transition =
  "all 1.2s ease";

});

/* =========================
   AUDIO CONTROL
========================= */

const audio =
document.getElementById("bg-audio");

const soundButton =
document.querySelector(".nav-btn");

let playing = false;

if(soundButton && audio){

  soundButton.addEventListener("click",()=>{

    if(!playing){

      audio.volume = 0.18;

      audio.play();

      soundButton.innerHTML =
      "sound on";

      playing = true;

    }

    else{

      audio.pause();

      soundButton.innerHTML =
      "sound off";

      playing = false;

    }

  });

}