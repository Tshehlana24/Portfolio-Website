
window.addEventListener('load', function() {
    // Hide the loader
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('mainContent').classList.remove('mainContent');
    // Show the content
  });
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

//show menu
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

//hide menu
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

//Remove mobile menu
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//SHADOw HEADER
const shadowHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');

}

window.addEventListener('scroll', shadowHeader);

//Email Sender

document.addEventListener('DOMContentLoaded', (event) => {
    emailjs.init("2JFn0e748gFAEI54K"); // Initialize EmailJS with your public key

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', sendEmail); 
});
const emailStatus = document.getElementById('status');



function sendEmail(event) {
    event.preventDefault();
    let parameters = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        subject: document.getElementById("subject").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_io3dk5v", "template_ygup8io", parameters).then(function(response) {

        emailStatus.style.display = "block";
        emailStatus.classList.add("status");
        emailStatus.innerHTML = "Message sent successfully!";
        event.target.reset();
        setTimeout(function done() {
            emailStatus.classList.remove("status");
            emailStatus.style.display = "none";
        },5000)
       
    }, function (error) {
        emailStatus.innerHTML = "Error: " + JSON.stringify(error);
    });
    }


    //scroll to top
    const scrollUp = () => {
    const scrollUp = document.getElementById('up');
    this.scrollY >= 390 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollUp);


    //ANIMATION
    const scrollReveal = ScrollReveal({
        origin: 'top',
        distance: '200px',
        duration: 2500,
        delay: 400,
        reset: true
    });


    ScrollReveal().reveal('.nav', {
        origin: 'top',
        distance: '200px',
        duration: 2500,
        delay: 400,
        reset: false
    })

    ScrollReveal().reveal('.service__card', {
        origin: 'bottom',      // Animation starts from the bottom
        distance: '310px',      // Moves 50px into position
        duration: 800,         // Duration of each animation (800ms)
        delay: 500,            // Initial delay before starting
        interval: 500,         // Delay between each card's reveal (200ms)
        reset: true           // Animation happens once when the element scrolls into view
      });
    scrollReveal.reveal(`.home__name, .home__info, .about_image, .contact__description`, { origin: 'left'  });
    scrollReveal.reveal(`.socials, .nav, .section__title-1`, { origin: 'top'  });
    scrollReveal.reveal(`.about_list, .footer`, { origin: 'bottom'  });
    scrollReveal.reveal(`.home__picture, .about_description, .contact-form`, { origin: 'right'  });



