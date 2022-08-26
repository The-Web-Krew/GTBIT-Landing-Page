
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

  
// ================= Counter===================//
