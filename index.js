
// Get the current page URL
var currentPage = window.location.href;

// Get all the navbar links
var navbarLinks = document.querySelectorAll('.navbar a');

// Loop through each link and check if its href matches the current page URL
navbarLinks.forEach(function(link) {
  if (link.href === currentPage) {
    link.classList.add('active');
  }
});
