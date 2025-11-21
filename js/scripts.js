// Standalone JavaScript utilities
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.querySelector('.hamburger-icon');
  const closeIcon = document.querySelector('.close-icon');
  
  if (menu) {
    const isActive = menu.classList.contains('active');
    
    if (isActive) {
      menu.classList.remove('active');
      menu.style.display = 'none';
      if (hamburger) hamburger.style.display = 'block';
      if (closeIcon) closeIcon.style.display = 'none';
    } else {
      menu.classList.add('active');
      menu.style.display = 'flex';
      if (hamburger) hamburger.style.display = 'none';
      if (closeIcon) closeIcon.style.display = 'block';
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded successfully');
});