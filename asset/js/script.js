let logo = document.getElementById("logo");
let menu = document.querySelector(".navbar");
gsap.registerPlugin(ScrollTrigger);

gsap.from(menu, {
  y: -100,
  duration: 1,
})
gsap.from(logo, {
  color: "red",
  x: -100,
  duration: 1,
  delay: 0.5,
})

//toast
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


//gsap animations con scroll trigger
//carrouser
gsap.from("#carouselExampleAutoplaying", {
  opacity: 0,
  y: 60,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#carouselExampleAutoplaying",
    start: "top 80%",  // Cuando entre al viewport
    toggleActions: "play none none none",
  }
});
//card
// Animaciones independientes por card
document.querySelectorAll(".card").forEach((card) => {

  let img = card.querySelector(".card-img-top");
  let title = card.querySelector(".card-title");
  let text = card.querySelector(".card-text");
  let btn = card.querySelector(".btn");

  // timeline por cada card
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      ease: "power3.out",
      start: "top 80%",
      end: "bottom 70%",
      scrub: 1,             // <-- sigue el scroll hacia adelante y atrás
      markers: false

    }
  });

  // Animación imagen (zoom sutil + fade)
  tl.from(img, {
    opacity: 0,
    scale: 1.15,
    duration: 1
  });

  // Animación título (slide desde arriba)
  tl.from(title, {
    opacity: 0,
    y: -30,
    duration: 0.6
  }, "-=0.6");

  // Animación texto (slide desde abajo)
  tl.from(text, {
    opacity: 0,
    y: 30,
    duration: 0.6
  }, "-=0.4");

  // Animación botón (fade + slide sutil)
  tl.from(btn, {
    opacity: 0,
    y: 10,
    duration: 0.5
  }, "-=0.3");
});


// Parallax global leve
gsap.to("body", {
  y: -50,
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});

// ANIMACIÓN GLOBAL ESTILO "CARDS" PARA TODA LA PÁGINA
document.querySelectorAll(".section-anim").forEach((section) => {

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      scrub: 0.8,
      start: "top 85%",
      end: "top 50%",
      markers: false
    }
  });

  // IMÁGENES dentro de la sección
  tl.from(section.querySelectorAll("img"), {
    opacity: 0,
    scale: 1.15,
    duration: 1
  });

  // TÍTULOS
  tl.from(section.querySelectorAll("h1, h2, h3, h4, h5"), {
    opacity: 0,
    y: -40,
    duration: 0.8
  }, "-=0.8");

  // PÁRRAFOS
  tl.from(section.querySelectorAll("p"), {
    opacity: 0,
    y: 40,
    duration: 0.8
  }, "-=0.6");

  // BOTONES
  tl.from(section.querySelectorAll("button, a.btn"), {
    opacity: 0,
    y: 20,
    duration: 0.5
  }, "-=0.4");

});


