document.addEventListener("DOMContentLoaded", function() {
    // Select the links for both the footer and sign-in
    var footerLink = document.querySelector('a[href="#footer"]');
    var signinLink = document.querySelector('a[href="#signin"]');
    var cardLink = document.querySelector('a[href="#bsr_cards"]');
  
    // Function to handle scrolling to sections
    function scrollToSection(event, targetId) {
      event.preventDefault();
      var targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  
    // Add click event listeners to both links
    if (footerLink) {
      footerLink.addEventListener('click', function(event) {
        scrollToSection(event, 'footer');
      });
    }
  
    if (signinLink) {
      signinLink.addEventListener('click', function(event) {
        scrollToSection(event, 'signin');
      });
    }

    if (cardLink) {
      signinLink.addEventListener('click', function(event) {
        scrollToSection(event, 'bsr_cards');
      });
    }
  });
  