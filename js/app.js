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
    window.addEventListener('scroll', scrollUp)


    //dark theme

  const themeButton = document.getElementById('theme-button');
  const darkTheme = 'dark-theme';
  const iconTheme = 'icon-sun';

  // Check if a theme is already selected
  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  // Get the current theme
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'icon-moon' : 'icon-sun';

  // Apply the user's saved theme
  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'icon-moon' ? 'add' : 'remove'](iconTheme);
  }

  // Toggle the theme when the button is clicked
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Save the theme and icon selection in local storage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  });


    