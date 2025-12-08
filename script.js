document.addEventListener('DOMContentLoaded', () => {
  // Menu toggle for mobile
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  const links = navLinks.querySelectorAll('a');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show-menu');
    });
  });

  // Formspree submission
  const form = document.querySelector('.contact-form');

  if(form) {
    form.addEventListener('submit', function(e){
      e.preventDefault(); // prevent default form submission
      const data = new FormData(form);

      fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
      })
      .then(response => {
          if(response.ok){
              alert('Message sent successfully!');
              form.reset();
          } else {
              alert('Oops! Something went wrong.');
          }
      })
      .catch(error => {
          alert('Oops! Something went wrong.');
      });
    });
  }
});
