document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
  
    // Change menu style on scroll
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.style.backgroundColor = '#044911';
      } else {
        header.style.backgroundColor = '#0da27d';
      }
    });
  });