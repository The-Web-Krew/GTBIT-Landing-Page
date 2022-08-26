
// ================= Navbar===================//
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
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

  
// ================= Owl-Carousel===================//
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:'true',
    margin:0,
    dots:true,
    center:true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:1
        },
        1100:{
            items:3
        }
    }
})

 $('.owl-carousel').on('translate.owl.carousel', function(e) {
    var index = e.item.index;
    $('.card-alumni').eq(index - 1).addClass('side');
    $('.card-alumni').eq(index + 1).addClass('side');
    $('.card-alumni').eq(index - 1).removeClass('main');
    $('.card-alumni').eq(index + 1).removeClass('main');
    $('.card-alumni').eq(index).removeClass('side');
    $('.card-alumni').eq(index).addClass('main');
  });


