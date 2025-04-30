/*====== Toggle Icon Navbar=======*/

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}



/*========== Scroll Sections Active Link =======*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });

    /*========== Sticky Navbar =======*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*========== Remove Toggle Icon Navbar =======*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};



/*========== Scroll Reveal =======*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*========== Typed JS =======*/
const typed = new Typed('.multiple-text', {
    strings: ['Software Tester', 'Frontend Developer', 'Content Creator'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1000,
    loop: true,
});



/*========== Dark/Light Mode =======*/
const headers = document.querySelectorAll(".accordion-header");
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const openItem = document.querySelector(".accordion-item.open");
      if (openItem && openItem !== header.parentElement) {
        openItem.classList.remove("open");
      }
      header.parentElement.classList.toggle("open");
    });
  });