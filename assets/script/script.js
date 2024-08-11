document.querySelector(".bargar-menu").addEventListener("click", () => {
  console.log("clicked");
  document.querySelector(".side-menu").classList.add("side-menu-active");
});
document.querySelector(".close").addEventListener("click", () => {
  console.log("clicked");
  document.querySelector(".side-menu").classList.remove("side-menu-active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    document.querySelector(".scroll-top").style.opacity = "1";
  } else {
    document.querySelector(".scroll-top").style.opacity = "0";
  }
});
// banner carousel start here
var swiper = new Swiper(".banner .mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// circular percent tage
// scroll trigger start here
if (window.innerWidth > 992) {
  let reveal = document.querySelectorAll("section");

  reveal.forEach((el) => {
    let headings = el.querySelectorAll("section");
    let btn = el.querySelectorAll("h1,h2,h5, a");

    let tl = gsap
      .timeline()
      .from(headings, {
        yx: 80,
        stagger: 0.05,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        btn,
        { x: 80, opacity: 0, duration: 1.3, ease: "power3.out" },
        "-=0.6"
      );

    ScrollTrigger.create({
      trigger: el,
      start: "center 130%",
      end: "top 50%",
      markers: false,
      toggleActions: "play none none reverse ",
      animation: tl,
    });


  });
} else {
  console.log("stopped scroll trigger");
}

// creative service section start here
const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    cards.forEach(otherCard => otherCard.classList.remove("service-card-active"));
    card.classList.add("service-card-active");
  });
});
// creative service section end here

//  project carousel start here
var swiper = new Swiper(".success-project .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});


const tabContainer = document.querySelector("#parent");
const navList = tabContainer.querySelectorAll(".menu button");
const tabList = tabContainer.querySelectorAll(".tab");

for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", (evt) => {
    let currentLink = tabContainer.querySelector("button.active");
    let currentTab = tabContainer.querySelector(".tab.active");

    currentLink.classList.remove("active");
    navList[i].classList.add("active");

    currentTab.classList.remove("active");
    tabList[i].classList.add("active");
  });
}

// testimonial section start here
var swiper = new Swiper(".testimonial .mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});