const dropdownLinks = document.querySelectorAll('.nav__link.dropdown');

dropdownLinks.forEach(link => {
  link.addEventListener('click', function() {
    this.classList.toggle('active'); // Toggle active class on click
  });
});
