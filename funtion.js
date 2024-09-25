document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-list-responsive');
    const navMenu = document.querySelector('.nav-item ul');
    
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  });
  const textElement = document.querySelector('.text');
  const containerWidth = document.querySelector('.container').offsetWidth;
  const textWidth = textElement.scrollWidth;

  // Calculate the animation duration based on text width
  const animationDuration = (textWidth + containerWidth) / 150; // Adjust the divisor for speed

  textElement.style.animationDuration = `${animationDuration}s`;
