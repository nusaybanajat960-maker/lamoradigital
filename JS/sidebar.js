(function () {
  "use strict";

  // Header toggle for mobile
  const headerToggleBtn = document.querySelector('.sidebar-toggle');
  function headerToggle() {
    document.querySelector('#sidebar').classList.toggle('sidebar-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  // Close mobile nav on link click
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.sidebar-show')) headerToggle();
    });
  });

  // ScrollSpy: Highlight sidebar items on scroll
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('#navmenu a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 60; // adjust offset
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

})();
