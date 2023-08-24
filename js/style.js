
// text
var typed= new Typed(".text",{
    strings:["Frontend Developer","Backend Developer", "Student Collage"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// navbar

const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// skills
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
    const itemClass = this.parentNode.className;

    // Toggle the clicked skill's state
    if (itemClass === 'skills_content skills_open') {
        this.parentNode.className = 'skills_content skills_close';
    } else {
        this.parentNode.className = 'skills_content skills_open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});






// swiper
document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.portfolio_container', {
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });


//ss   

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav_list a');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active_link'); // Ubah kelas menjadi 'active_link'
                } else {
                    link.classList.remove('active_link'); // Ubah kelas menjadi 'active_link'
                }
            });
        }
    });
}

window.addEventListener('scroll', scrollActive);


// dd
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// up
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// dark
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




// Tambahkan event listener untuk mengontrol tampilan header saat scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.top = '0';
        header.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)'; // Menambahkan efek bayangan saat scroll
    } else {
        header.style.top = '0';
        header.style.boxShadow = 'none'; // Menghilangkan efek bayangan saat di atas
    }
});

// scroll reveal
const sr = ScrollReveal({
    origin: 'right',
    distance: '60px',
    durattion: 3500,
    delay: 400,
})

sr.reveal('.home_img')
sr.reveal('.home_data', {delay: 600, origin: 'left', interval: 100})
sr.reveal('.button', {delay: 900, origin: 'bottom', interval: 200})
sr.reveal('.works_content', {delay: 900, origin: 'bottom', interval: 200})
sr.reveal('.about_tenn', {delay: 900, origin: 'right', interval: 300})
sr.reveal('.home_scroll', {delay: 1100, origin: 'bottom', interval: 300})
sr.reveal('.skill1', {origin: 'left'})
sr.reveal('.skill2', {origin: 'right'})
sr.reveal('.about_description', {origin: 'bottom'})
sr.reveal('.title_about', {origin: 'bottom'})
sr.reveal('.about_img', {origin: 'left'})
sr.reveal('.qualification_container', {origin: 'right'})
sr.reveal('.project_container', {origin: 'right'})
sr.reveal('.contact_container', {origin: 'bottom'})

