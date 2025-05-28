// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check if user has a preferred theme stored
  const userPreferredTheme = localStorage.getItem('theme');
  
  // Set theme based on user preference or system preference
  if (userPreferredTheme === 'dark') {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else if (userPreferredTheme === 'light') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  } else {
    // If no stored preference, check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    }
  }
  
  // Theme toggle click handler
  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  });
});