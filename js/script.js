// Animation for statistics
let hasAnimated = false;
function animateCounters() {
    const statsSection = document.getElementById('stats');
    const statsContainers = document.querySelectorAll('.stat_body');
    const sectionPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition && !hasAnimated) {
        statsContainers.forEach(statContainer => {
            statContainer.style.opacity = "1";
            statContainer.style.transform = "translateY(0)";

            const stat = statContainer.querySelector('.stat');
            const target = +statContainer.getAttribute('data-target');
            let count = 0;
            const increment = target / 50;

            const updateCount = () => { 
                count += increment;
                if (count < target) {
                    stat.innerText = Math.floor(count);
                    requestAnimationFrame(updateCount);
                } else {
                    stat.innerText = target;
                }
            };

            updateCount();
        });

        hasAnimated = true;
    } else if (sectionPosition > window.innerHeight) {
        hasAnimated = false;
        statsContainers.forEach(statContainer => {
            statContainer.style.opacity = "0";
            statContainer.style.transform = "translateY(50px)";
            statContainer.querySelector('.stat').innerText = "0"; 
        });
    }
}
document.addEventListener("DOMContentLoaded", () => {
    animateCounters();
    window.addEventListener("scroll", animateCounters);
});
// End of Animation 


// Start of TOP button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End of TOP button 
// Start of Mobile Menu


  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const closeMenu = document.getElementById('close-menu');

  hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.classList.add('menu-open');
  });

  closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.classList.remove('menu-open');
  });

  // Optional: click outside to close
  window.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
// // End of Mobile Menu

  const dropdown = document.querySelector('.dropdown');

  // Mobile dropdown toggle
  dropdown.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.classList.toggle('active');
    }
  });

