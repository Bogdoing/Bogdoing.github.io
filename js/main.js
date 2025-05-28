// Main script for initialization and coordination
document.addEventListener('DOMContentLoaded', () => {
  // Check if all required scripts are loaded
  if (typeof anime === 'undefined') {
    console.error('Anime.js is not loaded. Please check your internet connection.');
    return;
  }
  
  // Initialize any coordinated functionality here
  // No additional initialization needed for now as everything is handled in specific modules
  
  // Function to update gradient colors based on theme
  function updateGradientColors() {
    const isLightTheme = document.body.classList.contains('light-theme');
    const gradientBg = document.querySelector('.gradient-bg');
    
    // Add slight vibrance to the gradient when hovering over it
    gradientBg.addEventListener('mouseenter', () => {
      if (isLightTheme) {
        document.documentElement.style.setProperty('--gradient-color-1', 'rgba(255, 144, 0, 0.2)');
        document.documentElement.style.setProperty('--gradient-color-2', 'rgba(0, 255, 144, 0.2)');
        document.documentElement.style.setProperty('--gradient-color-3', 'rgba(144, 0, 255, 0.2)');
      } else {
        document.documentElement.style.setProperty('--gradient-color-1', 'rgba(255, 144, 0, 0.25)');
        document.documentElement.style.setProperty('--gradient-color-2', 'rgba(0, 255, 144, 0.25)');
        document.documentElement.style.setProperty('--gradient-color-3', 'rgba(144, 0, 255, 0.25)');
      }
    });
    
    // Reset gradient colors when mouse leaves
    gradientBg.addEventListener('mouseleave', () => {
      if (isLightTheme) {
        document.documentElement.style.setProperty('--gradient-color-1', 'rgba(255, 144, 0, 0.15)');
        document.documentElement.style.setProperty('--gradient-color-2', 'rgba(0, 255, 144, 0.15)');
        document.documentElement.style.setProperty('--gradient-color-3', 'rgba(144, 0, 255, 0.15)');
      } else {
        document.documentElement.style.setProperty('--gradient-color-1', 'rgba(255, 144, 0, 0.2)');
        document.documentElement.style.setProperty('--gradient-color-2', 'rgba(0, 255, 144, 0.2)');
        document.documentElement.style.setProperty('--gradient-color-3', 'rgba(144, 0, 255, 0.2)');
      }
    });
  }
  
  // Initialize gradient effects
  updateGradientColors();
  
  // Update gradient colors when theme changes
  document.getElementById('theme-toggle').addEventListener('click', updateGradientColors);
});