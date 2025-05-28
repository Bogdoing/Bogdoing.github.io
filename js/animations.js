// Handle animations using anime.js
document.addEventListener('DOMContentLoaded', () => {
  // Get all elements that need animations
  const gradientBg = document.querySelector('.gradient-bg');
  const container = document.querySelector('.container');
  const profileImage = document.querySelector('.profile-image');
  const experienceItems = document.querySelectorAll('.experience-item');
  
  // Animate container entry
  anime({
    targets: container,
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 1200,
    easing: 'easeOutExpo'
  });
  
  // Animate experience items
  anime({
    targets: experienceItems,
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    delay: anime.stagger(150),
    easing: 'easeOutExpo'
  });
  
  // Subtle movement for gradient background
  anime({
    targets: gradientBg,
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    duration: 20000,
    easing: 'linear',
    loop: true
  });
  
  // Create mousemove effect for gradient background
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    anime({
      targets: gradientBg,
      backgroundPosition: `${mouseX * 100}% ${mouseY * 100}%`,
      duration: 3000,
      easing: 'easeOutExpo'
    });
  });
  
  // Add hover animations to contact links and experience items
  const contactLinks = document.querySelectorAll('.contact-link');
  
  contactLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      anime({
        targets: link,
        scale: 1.05,
        duration: 300,
        easing: 'easeOutExpo'
      });
    });
    
    link.addEventListener('mouseleave', () => {
      anime({
        targets: link,
        scale: 1,
        duration: 300,
        easing: 'easeOutExpo'
      });
    });
  });

  experienceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      anime({
        targets: item,
        scale: 1.02,
        duration: 300,
        easing: 'easeOutExpo'
      });
    });
    
    item.addEventListener('mouseleave', () => {
      anime({
        targets: item,
        scale: 1,
        duration: 300,
        easing: 'easeOutExpo'
      });
    });
  });
});