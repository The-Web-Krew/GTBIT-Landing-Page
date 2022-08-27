// ================= Navbar===================//
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

// ================= Counter===================//

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 500;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});


// ================= proud_moment ==================//

$(".proud_moment").owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: "true",
  dots: true,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 3,
    },
    1500: {
      items: 5,
    },
  },
});

$(".proud_moment").on("translate.owl.carousel", function (e) {
  var index = e.item.index;
  // +_2
  $(".batch")
  .eq(index - 2)
  .addClass("fade_2");

$(".batch")
  .eq(index + 2)
  .addClass("fade_2");

$(".batch")
  .eq(index - 2)
  .removeClass("main fade_1");
$(".batch")
  .eq(index + 2)
  .removeClass("main fain_1");


  
  // +- 1
  $(".batch")
    .eq(index - 1)
    .addClass("fade_1");

  $(".batch")
    .eq(index + 1)
    .addClass("fade_1");

  $(".batch")
    .eq(index - 1)
    .removeClass("main fade_2");
  $(".batch")
    .eq(index + 1)
    .removeClass("main fade_2");

// MAIN
  $(".batch").eq(index).removeClass("fade_1");
  $(".batch").eq(index).addClass("main");
});


// ================ Companies===================//
$(".companies_visited").owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: "true",
  margin: 0,
  dots: true,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 3,
    },
    1100: {
      items: 5,
    },
  },
});

// ================= Start up===================//

$(".owl-carousel_1").owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: "true",
  margin: 0,
  dots: true,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1100: {
      items: 3,
    },
  },
});

$(".owl-carousel_1").on("translate.owl.carousel", function (e) {
  var index = e.item.index;
  $(".startup-card ")
    .eq(index - 1)
    .addClass("side");
  $(".startup-card ")
    .eq(index + 1)
    .addClass("side");
  $(".startup-card ")
    .eq(index - 1)
    .removeClass("main");
  $(".startup-card ")
    .eq(index + 1)
    .removeClass("main");
  $(".startup-card ").eq(index).removeClass("side");
  $(".startup-card ").eq(index).addClass("main");
});



// ================= Owl-Carousel===================//

$(".owl-carousel_2").owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: "true",
  margin: 0,
  dots: true,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1100: {
      items: 3,
    },
  },
});

$(".owl-carousel").on("translate.owl.carousel", function (e) {
  var index = e.item.index;
  $(".card-alumni")
    .eq(index - 1)
    .addClass("side");
  $(".card-alumni")
    .eq(index + 1)
    .addClass("side");
  $(".card-alumni")
    .eq(index - 1)
    .removeClass("main");
  $(".card-alumni")
    .eq(index + 1)
    .removeClass("main");
  $(".card-alumni").eq(index).removeClass("side");
  $(".card-alumni").eq(index).addClass("main");
});
