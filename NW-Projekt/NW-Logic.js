document.addEventListener('DOMContentLoaded', () => {
    const nav = document.createElement('nav');
    nav.className = 'top-nav';
  
    nav.innerHTML = `
      <div class="nav-logo">
        🧠 <span>Neurobiologie</span>
      </div>
      <div class="nav-links">
        <a href="NW-Main.html#home">Start</a>
        <a href="NW-Main.html#topics">Themen</a>
        <a href="NW-Main.html#about">Über das Projekt</a>
      </div>
      <button class="menu-btn">☰</button>
    `;
  
    document.body.prepend(nav);
  
    const menuBtn = nav.querySelector('.menu-btn');
    const navLinks = nav.querySelector('.nav-links');
    menuBtn.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  
    // Fix: Verhindere Scrollen zu Ankern beim Reload
    if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname);
    }
  });
  